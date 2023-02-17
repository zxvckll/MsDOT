


import MediaInterface from "../models/MediaInterface.js";


export const getMediaInterface = async (req, res) => {
  try {
    const mediaInterface = await MediaInterface.findAll({
      include: { all: true},
    });

    res.send(mediaInterface);
  } catch (err) {
    console.log(err);
  }
};


export const getMediaInterfaceById = async (req, res) => {
  try {
    const mediaInterface = await MediaInterface.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(mediaInterface);
  } catch (err) {
    console.log(err);
  }
};

export const getMediaInterfaceFiltered = async (req, res) => {
  try {
    const mediaInterface = await MediaInterface.findAll({
        where: req.body,
        
    });
    res.send(mediaInterface);
  } catch (err) {
    console.log(err);
  }
};


export const createMediaInterface = async (req, res) => {
  try {
    const mediaInterface = await MediaInterface.create(req.body);
    res.send(mediaInterface);
    res.json({
      message: "MediaInterface Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateMediaInterface = async (req, res) => {
  try {
    await MediaInterface.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "MediaInterface Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteMediaInterface = async (req, res) => {
  try {
    await MediaInterface.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "MediaInterface Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
