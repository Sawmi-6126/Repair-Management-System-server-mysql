import Sequelize from "sequelize";
import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Customer = db.define(
  "customer",
  {
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Customer;

(async () => {
  await db.sync();
})();
