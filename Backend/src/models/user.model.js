import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Role from './Role.model.js';
import WorkingLocation from './WorkingLocation.model.js';

const User = sequelize.define('User', {
    Id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    Username: { type: DataTypes.STRING, allowNull: false, unique: true },
    Password: { type: DataTypes.STRING, allowNull: false },
    First_name: { type: DataTypes.STRING, allowNull: false },
    Last_name: { type: DataTypes.STRING, allowNull: false },
    Phone: { type: DataTypes.STRING, allowNull: true },
    Mobile: { type: DataTypes.STRING, allowNull: true },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    Working_location: { type: DataTypes.BIGINT, allowNull: true },
    Joining_date: { type: DataTypes.DATE, allowNull: false },
    Role_id: { type: DataTypes.INTEGER, allowNull: false },
    Dob: { type: DataTypes.DATE, allowNull: false },
    Gender: { type: DataTypes.ENUM('Male', 'Female', 'Other'), allowNull: false },
    Current_Address: { type: DataTypes.TEXT, allowNull: true },
    Permanent_Address: { type: DataTypes.TEXT, allowNull: true },
    Reports_to: { type: DataTypes.BIGINT, allowNull: true },
    Last_Login: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    Created_on: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    Updated_on: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    timestamps: false,
    tableName: 'Users'
});

// Associations
User.belongsTo(Role, { foreignKey: 'Role_id' });
User.belongsTo(WorkingLocation, { foreignKey: 'Working_location' });
User.belongsTo(User, { as: 'Manager', foreignKey: 'Reports_to' });

export default User;
