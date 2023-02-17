// import sequelize

import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Date = db.define(
  "Date",
  {
    // Define attributes
    create_nota: {
      type: DataTypes.DATEONLY,
    },
    wait_confirmation_DP_cost: {
      type: DataTypes.DATEONLY,
    },
    wait_check_data: {
      type: DataTypes.DATEONLY,
    },
    warranty_data: {
      type: DataTypes.DATEONLY,
    },

  },
  {

    freezeTableName: true
  }
);


// Export model Product
export default Date;
