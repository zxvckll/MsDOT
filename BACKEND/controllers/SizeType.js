


import SizeType from "../models/SizeType.js";

export const getSizeType = async (req, res) => {
  try {
    const sizeType = await SizeType.findAll();

    res.send(sizeType);
  } catch (err) {
    console.log(err);
  }
};


export const getSizeTypeById = async (req, res) => {
  try {
    const sizeType = await SizeType.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(sizeType);
  } catch (err) {
    console.log(err);
  }
};


export const createSizeType = async (req, res) => {
  try {
    const sizeType = await SizeType.create(req.body);
    res.send(sizeType);
    res.json({
      message: "SizeType Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateSizeType = async (req, res) => {
  try {
    await SizeType.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "SizeType Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteSizeType = async (req, res) => {
  try {
    await SizeType.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "SizeType Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
