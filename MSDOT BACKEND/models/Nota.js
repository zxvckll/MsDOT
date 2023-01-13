// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
import User from "./User.js";
import SizeType from "./SizeType.js";
import Case from "./Case.js";
import Status from "./Status.js";
import Progress from "./Progress.js";
import Media from "./Media.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Nota = db.define(
  "Nota",
  {
    // Define attributes
    nota_no: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    size: {
      type: DataTypes.INTEGER,
    },
    model: {
      type: DataTypes.STRING,
    },
    warranty: {
      type: DataTypes.BOOLEAN,
    },
    cost: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    data_priority: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true

  }
);

Nota.belongsTo(User); 
User.hasMany(Nota); 
Nota.belongsTo(SizeType); 
SizeType.hasMany(Nota); 
Nota.belongsTo(Case); 
Case.hasMany(Nota); 
Nota.belongsTo(Status); 
Status.hasMany(Nota); 
Nota.belongsTo(Progress); 
Progress.hasMany(Nota); 
Nota.belongsTo(Media); 
Media.hasMany(Nota); 



// Export model Product
export default Nota;
