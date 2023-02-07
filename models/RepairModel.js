import Sequelize, { STRING } from "sequelize";
import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Repair = db.define(
  "repair",
  {
    job_id: {
      type: DataTypes.STRING,
      unique: true,
    },
    m_type: DataTypes.STRING,
    m_brand: DataTypes.STRING,
    color: DataTypes.STRING,
    received_date: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    technician: DataTypes.STRING,
    customer_name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    //initialAutoIncrement: 1000,
  }
);

export default Repair;

(async () => {
  await db.sync();
})();
