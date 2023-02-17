
import Role from "../models/Role.js";
export const getRole = async (req, res) => {
  try {
    const role = await Role.findAll();

    res.send(role);
  } catch (err) {
    console.log(err);
  }
};


export const getRoleById = async (req, res) => {
  try {
    const role = await Role.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(role);
  } catch (err) {
    console.log(err);
  }
};


export const createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.send(role);
    res.json({
      message: "Role Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateRole = async (req, res) => {
  try {
    await Role.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Role Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteRole = async (req, res) => {
  try {
    await Role.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Role Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
