import Nota from "../models/Nota.js";
import User from "../models/User.js";
import Media from "../models/Media.js";
import Case from "../models/Case.js";
import Date from "../models/Date.js";
import Cost from "../models/Cost.js";

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
    Object.keys(req.body).forEach(function (key, index) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    });

    const {
      name,
      address,
      city,
      office_phone,
      contact_person,
      home_phone,
      Email,
    } = req.body;
    // const id = req.body.UserId;

    const user = await User.upsert({
      name,
      address,
      city,
      office_phone,
      contact_person,
      home_phone,
      Email,
    });
    // if (!req.body.UserId) {
    Object.defineProperty(req.body, "UserId", {
      value: user[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    const {
      check_dp,
      recovery_data,
      backup_data,
      sent_data,
      cancel_recovery,
    } = req.body;
    // const id = req.body.UserId;

    const cost = await Cost.upsert({
      check_dp,
      recovery_data,
      backup_data,
      sent_data,
      cancel_recovery,
    });
    // if (!req.body.UserId) {
    Object.defineProperty(req.body, "CostId", {
      value: cost[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    const {
      create_nota,
      wait_confirmation_DP_cost,
      wait_check_data,
      warranty_data,
    } = req.body;
    // const id = req.body.UserId;

    const date = await Date.upsert({
      create_nota,
      wait_confirmation_DP_cost,
      wait_check_data,
      warranty_data,
    });
    // if (!req.body.UserId) {
    Object.defineProperty(req.body, "DateId", {
      value: date[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });
    // }

    const { MerkId, MediaInterfaceId } = req.body;
    const media = await Media.findOrCreate({
      where: {
        MerkId,
        MediaInterfaceId,
      },
    });

    const { CaseTypeId, CaseNameId } = req.body;
    const case1 = await Case.findOrCreate({
      where: { CaseTypeId, CaseNameId },
    });

    Object.defineProperty(req.body, "MediumId", {
      value: media[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    Object.defineProperty(req.body, "CaseId", {
      value: case1[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    const nota = await Nota.create(req.body);

    const { date_new_nota } = req.body;
    await Date.upsert({
      date_new_nota,
      NotumId: nota.id,
    });

    res.send(nota);
    res.json({
      message: "Nota Created",
      // nota,
    });
    res.send(nota);
    res.json({
      message: "Nota Created",
      // nota,
    });

   



  } catch (err) {
    console.log(err);
  }
};

// Update product berdasarkan id
export const updateNota = async (req, res) => {
  try {
    Object.keys(req.body).forEach(function (key, index) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    });
    const {
      costId,

      check_dp,
      recovery_data,
      backup_data,
      sent_data,
      cancel_recovery,
    } = req.body;
    // const id = req.body.UserId;

    const cost = await Cost.upsert({
      id : costId,
      check_dp,
      recovery_data,
      backup_data,
      sent_data,
      cancel_recovery,
    });
    // if (!req.body.UserId) {
    Object.defineProperty(req.body, "CostId", {
      value: cost[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    const {
      create_nota,
      dateId,
      wait_confirmation_DP_cost,
      wait_check_data,
      warranty_data,
    } = req.body;
    // const id = req.body.UserId;

    const date = await Date.upsert({
      id : dateId,
      create_nota,
      wait_confirmation_DP_cost,
      wait_check_data,
      warranty_data,
    });
    // if (!req.body.UserId) {
    Object.defineProperty(req.body, "DateId", {
      value: date[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    const {
      name,
      address,
      city,
      office_phone,
      contact_person,
      home_phone,
      Email,
    } = req.body;

    const user = await User.upsert({
      name,
      address,
      city,
      office_phone,
      contact_person,
      home_phone,
      Email,
    });
    // if (!req.body.UserId) {
    Object.defineProperty(req.body, "UserId", {
      value: user[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });
    // }

    const { MerkId, MediaInterfaceId } = req.body;
    const media = await Media.findOrCreate({
      where: {
        MerkId,
        MediaInterfaceId,
      },
    });

    const { CaseTypeId, CaseNameId } = req.body;
    const case1 = await Case.findOrCreate({
      where: { CaseTypeId, CaseNameId },
    });

    Object.defineProperty(req.body, "MediumId", {
      value: media[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    Object.defineProperty(req.body, "CaseId", {
      value: case1[0].id,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    const nota = await Nota.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const { date_new_nota } = req.body;
    await Date.upsert({
      date_new_nota,
      NotumId: req.params.id,
    });

    res.send(nota);
    res.json({
      message: "Nota Created",
      // nota,
    });
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
