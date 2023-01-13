
import CaseName from "../models/CaseName.js";
export const getCaseName = async (req, res) => {
  try {
    const caseName = await CaseName.findAll();

    res.send(caseName);
  } catch (err) {
    console.log(err);
  }
};


export const getCaseNameById = async (req, res) => {
  try {
    const caseName = await CaseName.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(caseName);
  } catch (err) {
    console.log(err);
  }
};


export const createCaseName = async (req, res) => {
  try {
    const caseName = await CaseName.create(req.body);
    res.send(caseName);
    res.json({
      message: "CaseName Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateCaseName = async (req, res) => {
  try {
    await CaseName.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "CaseName Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteCaseName = async (req, res) => {
  try {
    await CaseName.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "CaseName Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
