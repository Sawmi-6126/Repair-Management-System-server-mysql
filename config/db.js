import { Sequelize } from "sequelize";

const db = new Sequelize("development_project", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
