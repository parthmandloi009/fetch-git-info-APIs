import express, { Application, Request, Response, NextFunction } from 'express'
import UserController from '../controllers/user'
import { checkFromDb, checkRepoFromDb } from '../middleware/checkDb'

const router = express.Router()
router.get('/api/:name', checkFromDb, UserController.User)

router.get('/repo/:name', UserController.Repo)

export default router
