const User = require("../models/User");

const registerUser = async (

  req,

  res

) => {

  try {

    const user = await User.create({

      name:req.body.name,

      email:req.body.email,

      password:req.body.password,

    });

    res.status(201).json(user);

  }

  catch(error){

    res.status(500).json({

      message:error.message,

    });

  }

};

const getUsers = async (

  req,

  res

) => {

  try {

    const users =

      await User.find();

    res.json(users);

  }

  catch(error){

    res.status(500).json({

      message:error.message,

    });

  }

};

module.exports = {

  registerUser,

  getUsers,

};