import Case from '../models/Case.js'

// import Case from "../models/Case.js";
// import CaseName from "../models/CaseName.js";
// import Media from "../models/Media.js";

// import Status from "../models/Status.js";
// import User from "../models/User.js";
// import SizeType from "../models/SizeType.js";

// import MediaInterface from "../models/MediaInterface.js";
// import MediaType from "../models/MediaType.js";
export const getCase = async (req, res) => {
  try {
    const case1 = await Case.findAll({ include: { all: true}});

    res.send(case1);
  } catch (err) {
    console.log(err);
  }
};

// Get Case berdasarkan id
export const getCaseById = async (req, res) => {
  try {
    const case1 = await Case.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(case1);
  } catch (err) {
    console.log(err);
  }
};

// Create product baru
export const createCase = async (req, res) => {
  try {
    const case1 = await Case.findOrCreate({
      where: req.body
    });
    res.send(case1);
    res.json({
      message: "Case Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update product berdasarkan id
export const updateCase = async (req, res) => {
  try {
    await Case.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Case Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete product berdasarkan id
export const deleteCase = async (req, res) => {
  try {
    await Case.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Case Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
