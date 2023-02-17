
import Date from "../models/Date.js";

export const getDate = async (req, res) => {
  try {
    const date = await Date.findAll();

    res.send(date);
  } catch (err) {
    console.log(err);
  }
};


// export const getDateById = async (req, res) => {
//   try {
//     const date = await Date.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(date);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getDateById = async (req, res) => {
  try {
    const date = await Date.findOne({
      where: req.body
    });
    res.send(date);
  } catch (err) {
    console.log(err);
  }
};


export const createDate = async (req, res) => {
  try {
    const date = await Date.create(req.body);
    res.send(date);
    res.json({
      message: "Date Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateDate = async (req, res) => {
  try {
    await Date.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Date Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteDate = async (req, res) => {
  try {
    await Date.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Date Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
