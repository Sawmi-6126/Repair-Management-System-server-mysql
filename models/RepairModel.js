import Sequelize from "sequelize";
import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Repair = db.define(
  "repair",
  {
    job_id: DataTypes.STRING,
    m_type: DataTypes.STRING,
    m_brand: DataTypes.STRING,
    color: DataTypes.STRING,
    received_date: DataTypes.DATE,
    status: DataTypes.STRING,
    technician: DataTypes.STRING,
    customer_name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Repair;

(async () => {
  await db.sync();
})();
