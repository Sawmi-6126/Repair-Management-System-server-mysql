import Sequelize from "sequelize";
import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Technician = db.define(
  "technician",
  {
    name: DataTypes.STRING,
    nic: DataTypes.STRING,
    t_mobile: DataTypes.STRING,
    epfno: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    t_address: DataTypes.STRING,
    appointmentType: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Technician;

(async () => {
  await db.sync();
})();
