npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string,image:string,alamat:string,pendidikan:string,age:integer

npx sequelize-cli model:generate --name posting --attributes postingan:string,image:string,userId:integer

npx sequelize-cli model:generate --name profile --attributes alamat:string,pendidikan:string,organisasi:string,kerja:string,deskripsi:string,image:string,userId:integer


profile.belongsTo(models.user);
user.hasMany(models.profile);

user.init({
    name: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message : "name cannot be empy"
        }
      }
    },
    user: {
      user: DataTypes.STRING,
      validate:{
        notEmpty:{
          message : "user cannot be empy"
        }
      }
    },
    password: {
      password: DataTypes.STRING,
      validate:{
        notEmpty:{
          message : "password cannot be empy"
        }
      }
    },
    age: {
      age: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message : "password cannot be empy"
        }
      }
    },
    image: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};