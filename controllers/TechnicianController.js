import Technician from "../models/TechnicianModel.js";

export const getTechnician = async (req, res) => {
  try {
    const response = await Technician.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTechnicianbyId = async (req, res) => {
  try {
    const response = await Technician.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTechnician = async (req, res) => {
  try {
    await Technician.create(req.body);
    res.status(201).json({ msg: "Technician Saved Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTechnician = async (req, res) => {
  try {
    await Technician.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Technician Updated Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTechnician = async (req, res) => {
  try {
    await Technician.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Technician Deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};

export const countTechnician = async (req, res) => {
  try {
    const countTechnician = await Technician.count();
    res.json({ countTechnician });
  } catch (error) {
    console.error("Error getting Technician count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
