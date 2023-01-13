



import Merk from "../models/Merk.js";

export const getMerk = async (req, res) => {
  try {
    const merk = await Merk.findAll({
      include: { all: true },
    });

    res.send(merk);
  } catch (err) {
    console.log(err);
  }
};


export const getMerkById = async (req, res) => {
  try {
    const merk = await Merk.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(merk);
  } catch (err) {
    console.log(err);
  }
};


export const createMerk = async (req, res) => {
  try {
    const merk = await Merk.create(req.body);
    res.send(merk);
    res.json({
      message: "Merk Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const FindMerk = async (req, res) => {
  try {
    const merk = await Merk.findOne({
      where: req.body
   });
    res.send(merk);
    res.json({
      message: "Merk Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateMerk = async (req, res) => {
  try {
    await Merk.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Merk Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteMerk = async (req, res) => {
  try {
    await Merk.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Merk Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
