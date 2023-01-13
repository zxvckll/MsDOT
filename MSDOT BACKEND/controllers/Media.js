import Media from "../models/Media.js";

export const getMedia = async (req, res) => {
  try {
    const media = await Media.findAll({
      include: { all: true, nested: true },
    });

    res.send(media);
  } catch (err) {
    console.log(err);
  }
};

export const getMediaById = async (req, res) => {
  try {
    const media = await Media.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(media);
  } catch (err) {
    console.log(err);
  }
};

export const createMedia = async (req, res) => {
  try {
    const media = await Media.findOrCreate({
      where: req.body
    });
    res.send(media);
    res.json({
      message: "Media Created",
    });
  } catch (err) {
    console.log(err);
  }
}

export const updateMedia = async (req, res) => {
  try {
    await Media.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Media Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteMedia = async (req, res) => {
  try {
    await Media.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Media Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
