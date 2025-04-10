import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.model.js';

const Lead = sequelize.define('Lead', {
    Id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    Name: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: true, validate: { isEmail: true } },
    Number: { type: DataTypes.STRING, allowNull: false },
    Requirement: { type: DataTypes.STRING, allowNull: false },
    Created_by: { type: DataTypes.BIGINT, allowNull: false },
    Call_Status: { type: DataTypes.STRING },
    Lead_Status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'New' },
    Last_call: { type: DataTypes.DATE, allowNull: true },
    Call_scheduled: { type: DataTypes.DATE, allowNull: true },
    Note: { type: DataTypes.TEXT, allowNull: true },
    Status: { type: DataTypes.STRING, allowNull: false },
    Assign_to: { type: DataTypes.BIGINT, allowNull: true },
    Assigned_Date: { type: DataTypes.DATE, allowNull: true },
    Created_on: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    Updated_on: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    timestamps: false,
    tableName: 'Leads'
});

// Associations
Lead.belongsTo(User, { as: 'Creator', foreignKey: 'Created_by' });
Lead.belongsTo(User, { as: 'Assignee', foreignKey: 'Assign_to' });

export default Lead;