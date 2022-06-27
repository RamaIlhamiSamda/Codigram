const { user, profile } = require("../models");
const { decryptPassword } = require("../helper/bcrypt");
const { tokenGenerator, verifyGenerator } = require("../helper/jsonwebtoken");

class userController {
  static async getUser(req, res) {
    const tokenAkses = req.headers.access_token
    try {
      const token = verifyGenerator(tokenAkses)
      const users = await user.findAll({
        where : {id : token.id},
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = req.params.id;
      let result = await user.destroy({
        where: { id },
      });
      result === 1
        ? res.status(201).json({
            message: `id ${id} hasbeen deleted`,
          })
        : res.status(404).json({
            message: `id ${id} not deleted`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { name, email, password, image, alamat, pendidikan, age } =
        req.body;
      // const blurPassword =bcrypt.hashSync(password,5)
      let result = await user.create({
        name,
        email,
        password,
        image,
        alamat,
        pendidikan,
        age,
      });
      res.status(201).json(result);
      // console.log(req.body)
      // bcrypt.hashSync((password),5)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let foundEmail = await user.findOne({
        where: { email },
      });
      if (foundEmail) {
        if (decryptPassword(password, foundEmail.password)) {
          let aksesToken = tokenGenerator(foundEmail);
          // console.log(aksesToken)
          res.status(201).json({ aksesToken });

          let verifyToken = verifyGenerator(aksesToken);
          console.log(verifyToken);
        } else {
          res.status(404).json({
            message: `password : ${password} is false`,
          });
        }
      } else {
        res.status(404).json({
          message: `email : ${email} is not found`,
        });
      }
    } catch (err) {
      res.status(404).json(err);
    }
  }
  static async userLogin(req, res) {
    try {
      const access_token = req.headers.access_token;
      const email = verifyGenerator(access_token).email;
      const emailFound = await user.findOne({
        where: { email },
        include: [profile],
      });
      if (emailFound) {
        res.status(201).json(emailFound);
      }
    } catch (err) {
      res.status(404).json(err);
    }
  }
  static async update(req, res) {
    const tokenAkses = req.headers.access_token
    const id = req.params.id;
    try {
      
      const { name, email, password,image,alamat,pendidikan,age } = req.body;
      const result = await user.update(
        {
          name,
          email,
          password,
          image,
          alamat,
          pendidikan,
          age
        },
        {
          where: { id },
        }
      );

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getUserById(req, res) {
    const id = req.params.id;
    try {
      const result = await user.findByPk(aksesToken);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = userController;
