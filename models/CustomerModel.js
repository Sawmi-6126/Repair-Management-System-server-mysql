import Sequelize from "sequelize";
import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Customer = db.define(
  "customer",
  {
    f_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    l_name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Customer;

(async () => {
  await db.sync();
})();
