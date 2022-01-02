import express, { Application, Request, Response, NextFunction } from 'express'
import sequelize from './dbconfig/dbconnector'
import routes from './routes/user'
import cors from 'cors'
const app: Application = express()

app.use(cors())
app.use('/user', routes)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello')
})

sequelize.sync().then(() => {
  console.log('Connet to db')
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})

module.exports = app
