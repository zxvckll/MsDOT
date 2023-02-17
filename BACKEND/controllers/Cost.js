
import Cost from "../models/Cost.js";

export const getCost = async (req, res) => {
  try {
    const cost = await Cost.findAll({ include: { all: true} });

    res.send(cost);
  } catch (err) {
    console.log(err);
  }
};


// export const getCostById = async (req, res) => {
//   try {
//     const cost = await Cost.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(cost);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getCostById = async (req, res) => {
  try {
    const cost = await Cost.findOne({
      where: req.body
    });
    res.send(cost);
  } catch (err) {
    console.log(err);
  }
};


export const createCost = async (req, res) => {
  try {
    const cost = await Cost.create(req.body);
    res.send(cost);
    res.json({
      message: "Cost Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateCost = async (req, res) => {
  try {
    await Cost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Cost Upcostd",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteCost = async (req, res) => {
  try {
    await Cost.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Cost Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
