import Repair from "../models/RepairModel.js";

export const getRepair = async (req, res) => {
  try {
    const response = await Repair.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRepairbyId = async (req, res) => {
  try {
    const response = await Repair.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createRepair = async (req, res) => {
  try {
    await Repair.create(req.body);
    res.status(201).json({ msg: "Task Saved Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRepair = async (req, res) => {
  try {
    await Repair.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Task Updated Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRepair = async (req, res) => {
  try {
    await Repair.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Task Deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};
