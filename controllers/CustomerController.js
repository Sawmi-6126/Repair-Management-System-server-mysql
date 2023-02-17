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

export const searchCustomer = async (req, res) => {
  try {
    const { mobile } = req.query;
    const response = await Customer.findOne({
      where: {
        //id: req.params.id,
        mobile: mobile,
      },
    });
    if (response) {
      res.send({ customerName: response.f_name });
    } else {
      res.send("Customer not found");
    }
  } catch (error) {
    console.error("Error searching for customer:", error);
    res.status(500).send("Error searching for customer");
  }
};

export const countCustomer = async (req, res) => {
  try {
    const countCustomer = await Customer.count();
    res.json({ countCustomer });
  } catch (error) {
    console.error("Error getting customer count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
