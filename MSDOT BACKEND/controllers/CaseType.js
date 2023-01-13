
import CaseType from "../models/CaseType.js";

export const getCaseType = async (req, res) => {
  try {
    const caseType = await CaseType.findAll();

    res.send(caseType);
  } catch (err) {
    console.log(err);
  }
};


export const getCaseTypeById = async (req, res) => {
  try {
    const caseType = await CaseType.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(caseType);
  } catch (err) {
    console.log(err);
  }
};


export const createCaseType = async (req, res) => {
  try {
    const caseType = await CaseType.create(req.body);
    res.send(caseType);
    res.json({
      message: "CaseType Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateCaseType = async (req, res) => {
  try {
    await CaseType.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "CaseType Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteCaseType = async (req, res) => {
  try {
    await CaseType.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "CaseType Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
