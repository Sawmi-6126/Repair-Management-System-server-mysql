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

export const countPending = async (req, res) => {
  try {
    const countPending = await Repair.count({
      where: { status: "Pending" },
    });
    res.json({ countPending });
  } catch (error) {
    console.error("Error getting pending repairs count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const countOngoing = async (req, res) => {
  try {
    const countOngoing = await Repair.count({
      where: { status: "On Progress" },
    });
    res.json({ countOngoing });
  } catch (error) {
    console.error("Error getting ongoing repairs count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const countCompleted = async (req, res) => {
  try {
    const countCompleted = await Repair.count({
      where: { status: "Completed" },
    });
    res.json({ countCompleted });
  } catch (error) {
    console.error("Error getting completed repairs count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// export const countPaid = async (req, res) => {
//   try {
//     const countPending = await Repair.count({
//       where: { status: "Pending" },
//     });
//     res.json({ countPending });
//   } catch (error) {
//     console.error("Error getting pending repairs count:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

export const searchJobId = async (req, res) => {
  try {
    // const { job } = req.query;
    // const response = await Repair.findOne({
    //   order: id,
    const limit = req.query.limit || 1; // set a default limit of 10
    // retrieve the users from the database with the specified limit
    const users = Repair({ limit });
    res.json(users);

    //id: req.params.id,
    // });
    if (response) {
      res.send({ jobId: response.jobId });
    } else {
      res.send("Customer not found");
    }
  } catch (error) {
    console.error("Error searching for customer:", error);
    res.status(500).send("Error searching for customer");
  }
};
