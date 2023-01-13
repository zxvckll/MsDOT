import Nota from "../models/Nota.js";
import Media from "../models/Media.js";
import Case from "../models/Case.js";
import { createMedia } from "../controllers/Media.js";
import { createCase } from "../controllers/Case.js";
import HistoryProgress from "../models/HistoryProgress.js";
// import Case from "../models/Case.js";
// import CaseName from "../models/CaseName.js";
// import Media from "../models/Media.js";

// import Status from "../models/Status.js";
// import User from "../models/User.js";
// import SizeType from "../models/SizeType.js";

// import MediaInterface from "../models/MediaInterface.js";
// import MediaType from "../models/MediaType.js";
export const getNota = async (req, res) => {
  try {
    const nota = await Nota.findAll({ include: { all: true, nested: true } });

    res.send(nota);
  } catch (err) {
    console.log(err);
  }
};

// Get Nota berdasarkan id
export const getNotaById = async (req, res) => {
  try {
    const nota = await Nota.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(nota);
  } catch (err) {
    console.log(err);
  }
};

// Create product baru
export const createNota = async (req, res) => {
  try {
    const nota = await Nota.create(req.body);
    res.send(nota);
    res.json({
      message: "Nota Created",
      nota
    });
  } catch (err) {
    console.log(err);
  }
};

// Update product berdasarkan id
export const updateNota = async (req, res) => {
  try {
    const nota = await Nota.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    
    res.json({
      message: "Nota Updated",
      id : req.params.id,
    });
    return nota
  } catch (err) {
    console.log(err);
  }
};

// Delete product berdasarkan id
export const deleteNota = async (req, res) => {
  try {
    await Nota.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Nota Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
