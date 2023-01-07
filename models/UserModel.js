import { Sequelize } from "sequelize";
import db from "../config/db.js";
import { DataTypes } from "sequelize";

const User = db.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
