import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const WorkingLocation = sequelize.define('WorkingLocation', {
    Id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    Location: { type: DataTypes.STRING(100), allowNull: false, unique: true }
}, {
    timestamps: false,
    tableName: 'Working_location'
});

export default WorkingLocation;
