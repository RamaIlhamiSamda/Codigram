const { posting,user } = require("../models");
const {verifyGenerator} = require('../helper/jsonwebtoken')

class postingController {
  static async getPosting(req, res) {
    try {
      
      const postings = await posting.findAll({
        include:[user]
      });
      
      res.status(200).json(postings);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req,res){
    try{
     
      const { postingan,image } = req.body
      const access_token = req.headers.access_token
      
      // const image = req.file.path
      const userId = verifyGenerator(access_token).id
      // let finalImageURL = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename
      let result = await posting.create({
        postingan,image,userId
      })
      res.status(200).json({result})
    }
    catch(err){
      res.status(500).json(err)
    } 
  }
  
  static async deletePosting(req, res) {
    try {
      const id = req.params.id;
      let result = await posting.destroy({
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

}

module.exports = postingController;
