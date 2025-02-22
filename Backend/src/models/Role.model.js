import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Role = sequelize.define('Role', {
    Id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Name: { type: DataTypes.STRING(50), allowNull: false, unique: true }
}, {
    timestamps: false,
    tableName: 'Roles'
});

export default Role;
