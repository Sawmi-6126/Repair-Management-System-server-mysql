import Parts from "../models/PartsModel.js";

export const getParts = async (req, res) => {
  try {
    const response = await Parts.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPartsbyId = async (req, res) => {
  try {
    const response = await Parts.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createParts = async (req, res) => {
  try {
    await Parts.create(req.body);
    res.status(201).json({ msg: "Saved Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateParts = async (req, res) => {
  try {
    await Parts.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Parts Updated Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteParts = async (req, res) => {
  try {
    await Parts.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Part Deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchPart = async (req, res) => {
  try {
    const { barcode } = req.query;
    const response = await Parts.findOne({
      where: {
        barcode: barcode,
      },
    });
    if (response) {
      res.send({ response });
    } else {
      res.send("Part not found");
    }
  } catch (error) {
    console.error("Error searching for inventory:", error);
    res.status(500).send("Error searching for inventory");
  }
};
