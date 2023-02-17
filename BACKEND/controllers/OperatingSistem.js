
import OperatingSistem from "../models/OperatingSistem.js";

export const getOperatingSistem = async (req, res) => {
  try {
    const operatingSistem = await OperatingSistem.findAll();

    res.send(operatingSistem);
  } catch (err) {
    console.log(err);
  }
};


export const getOperatingSistemById = async (req, res) => {
  try {
    const operatingSistem = await OperatingSistem.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(operatingSistem);
  } catch (err) {
    console.log(err);
  }
};


export const createOperatingSistem = async (req, res) => {
  try {
    const operatingSistem = await OperatingSistem.create(req.body);
    res.send(operatingSistem);
    res.json({
      message: "OperatingSistem Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateOperatingSistem = async (req, res) => {
  try {
    await OperatingSistem.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "OperatingSistem Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteOperatingSistem = async (req, res) => {
  try {
    await OperatingSistem.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "OperatingSistem Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
