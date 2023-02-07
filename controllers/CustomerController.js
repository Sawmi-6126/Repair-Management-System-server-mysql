import Customer from "../models/CustomerModel.js";

export const getCustomer = async (req, res) => {
  try {
    const response = await Customer.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCustomerbyId = async (req, res) => {
  try {
    const response = await Customer.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    res.status(201).json({ msg: "Customer Saved Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCustomer = async (req, res) => {
  try {
    await Customer.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Customer Updated Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await Customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Customer Deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCustomerbyMobile = async (req, res) => {
  try {
    const response = await Customer.findOne({
      where: {
        mobile: req.body.mobile,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
