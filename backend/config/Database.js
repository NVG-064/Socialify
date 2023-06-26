import { Sequelize } from "sequelize";

const db = new Sequelize("socialifydb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
