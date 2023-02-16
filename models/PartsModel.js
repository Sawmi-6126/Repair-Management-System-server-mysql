import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Parts = db.define(
  "parts",
  {
    barcode: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.FLOAT,
    discount: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Parts;

(async () => {
  await db.sync();
})();
