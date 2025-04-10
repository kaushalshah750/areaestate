import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Lead from './Lead.model.js';

const LeadHistory = sequelize.define('Lead_History', {
    Id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    Lead_Id: { type: DataTypes.BIGINT, allowNull: false },
    Contact_by: { type: DataTypes.STRING, allowNull: false },
    Note: { type: DataTypes.TEXT, allowNull: true },
    Created_on: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    timestamps: false,
    tableName: 'Lead_History'
});

// Associations
LeadHistory.belongsTo(Lead, { foreignKey: 'Lead_Id' });

export default LeadHistory;