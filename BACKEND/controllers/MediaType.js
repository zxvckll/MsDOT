


import MediaType from "../models/MediaType.js";


export const getMediaType = async (req, res) => {
  try {
    const mediaType = await MediaType.findAll({
      include: { all: true},
    });

    res.send(mediaType);
  } catch (err) {
    console.log(err);
  }
};


export const getMediaTypeById = async (req, res) => {
  try {
    const mediaType = await MediaType.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(mediaType);
  } catch (err) {
    console.log(err);
  }
};


export const createMediaType = async (req, res) => {
  try {
    const mediaType = await MediaType.create(req.body);
    res.send(mediaType);
    res.json({
      message: "MediaType Created",
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateMediaType = async (req, res) => {
  try {
    await MediaType.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "MediaType Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteMediaType = async (req, res) => {
  try {
    await MediaType.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "MediaType Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
