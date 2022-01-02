import { Sequelize } from 'sequelize'

const db = 'postgres'
const username = 'deq'
const password = 'deq@123'

const sequelize = new Sequelize(db, username, password, {
  dialect: 'postgres',
  port: 5432,
})

export default sequelize
