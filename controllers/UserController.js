import User from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserbyId = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ msg: "User Created Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

// export const updateCustomer = async (req, res) => {
//   try {
//     await Customer.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(201).json({ msg: "Customer Updated Successfully" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deleteCustomer = async (req, res) => {
//   try {
//     await Customer.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(201).json({ msg: "Customer Deleted!" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
