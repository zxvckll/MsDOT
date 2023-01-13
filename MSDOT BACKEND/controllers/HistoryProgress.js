import HistoryProgress from '../models/HistoryProgress.js'

export const getHistoryProgress = async (req, res) => {
  try {
    const historyProgress = await HistoryProgress.findAll({ include: { all: true, nested: true}});

    res.send(historyProgress);
  } catch (err) {
    console.log(err);
  }
};

// Get HistoryProgress berdasarkan id
export const getHistoryProgressById = async (req, res) => {
  try {
    const historyProgress = await HistoryProgress.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(historyProgress);
  } catch (err) {
    console.log(err);
  }
};

// Create product baru
export const createHistoryProgress = async (req, res) => {
  try {
    const historyProgress = await HistoryProgress.findOrCreate({
       where: req.body
    });
    res.send(historyProgress);
    res.json({
      message: "HistoryProgress Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update product berdasarkan id
export const updateHistoryProgress = async (req, res) => {
  try {
    await HistoryProgress.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "HistoryProgress Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete product berdasarkan id
export const deleteHistoryProgress = async (req, res) => {
  try {
    await HistoryProgress.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "HistoryProgress Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
