

import User from "../models/User.js";


export const getUser = async (req, res) => {
  try {
    const user = await User.findAll({
      include: { all: true},
    });

    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({
        where: {
          Email: req.body.Email,
        },       
    });
    
    if(!!user){
      res.status(200).send(user);
    }else {
      res.status(404).send(user);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};


export const createUser = async (req, res) => {
  try {
    const user = await User.upsert(req.body);
    res.send(user);
    res.json({
      message: "User Created",
    });
  } catch (err) {
    console.log(err);
  }
};




export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
