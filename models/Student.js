const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');
const City = require('./City');
const Group = require('./Group');

const Student = db.define('Student', {

    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 255],
                msg: "The name must contain minimun 2 characters"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
    },
    gender: DataTypes.ENUM('Male', 'Female'),
    dateBirth: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        min: 1
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4 
    }

  },{
    tableName: 'Student'
  });

  Student.belongsTo(City);
  Student.belongsTo(Group);
  module.exports = Student;