import Progress from "../models/Progress.js";
import ProgressType from "../models/ProgressType.js";

export const getProgress = async (req, res) => {
  try {
    const progress = await Progress.findAll({ include: ProgressType });

    res.send(progress);
  } catch (err) {
    console.log(err);
  }
};

// Get progress berdasarkan id
export const getProgressById = async (req, res) => {
  try {
    const progress = await Progress.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(progress);
  } catch (err) {
    console.log(err);
  }
};

export const getProgressFiltered = async (req, res) => {
  try {
    const progress = await Progress.findAll({
        where: req.body,
        
    });
    res.send(progress);
  } catch (err) {
    console.log(err);
  }
};

// Create product baru
export const createProgress = async (req, res) => {
    try {
        const progress = await Progress.create(req.body);
        res.send(progress);
        res.json({
          message: "Progress Created",
        });
      } catch (err) {
        console.log(err);
      }
};

// Update product berdasarkan id
export const updateProgress = async (req, res) => {
  try {
    await Progress.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Progress Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete product berdasarkan id
export const deleteProgress = async (req, res) => {
  try {
    await Progress.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Progress Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
