

import ProgressType from "../models/ProgressType.js";

export const getProgressType = async (req, res) => {
  try {
    const progressType = await ProgressType.findAll({
      include: { all: true },
    });

    res.send(progressType);
  } catch (err) {
    console.log(err);
  }
};


export const getProgressTypeById = async (req, res) => {
  try {
    const progressType = await ProgressType.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(progressType);
  } catch (err) {
    console.log(err);
  }
};


export const createProgressType = async (req, res) => {
  try {
    const progressType = await ProgressType.create(req.body);
    res.send(progressType);
    res.json({
      message: "ProgressType Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateProgressType = async (req, res) => {
  try {
    await ProgressType.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "ProgressType Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteProgressType = async (req, res) => {
  try {
    await ProgressType.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "ProgressType Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
