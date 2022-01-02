import { Request, Response, NextFunction } from 'express'
import { UserAddModel, UserModel } from '../models/user'

const checkFromDb = async (req: Request, res: Response, next: NextFunction) => {
  console.log('Midedleware')

  try {
    const { name } = req.params

    const result = await UserModel.findOne({ where: { name: name } })

    if (result) {
      return res.status(200).json(result)
    }
    return next()
  } catch (err) {
    return res.status(404).json(err)
  }
}

const checkRepoFromDb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, page } = req.params

    const repo = await UserModel.findAll({
      where: { owner_name: name },
      limit: 10,
      offset: 1,
    })
    let total = 10
    if (repo) {
      return res.status(200).json({ repo, total })
    }
    return next()
  } catch (err) {
    return res.status(404).json(err)
  }
}

export { checkFromDb, checkRepoFromDb }
