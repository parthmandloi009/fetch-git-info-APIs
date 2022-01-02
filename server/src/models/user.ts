import * as Sequelize from 'sequelize'
import { Model, DataTypes } from 'sequelize'
import sequelize from '../dbconfig/dbconnector'

export interface UserAddModel {
  id?: string
  name: string
  owner_name: string
  description: string
  stars: string
  count: string
  url: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
  id: number
  name: string
  owner_name: string
  description: string
  stars: string
  count: string
  url: string
}

export interface UserViewModel {
  id: number
  name: string
}

export const UserModel = sequelize.define<UserModel, UserAddModel>('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
  },
  owner_name: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
  stars: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
  count: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
  url: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
})
