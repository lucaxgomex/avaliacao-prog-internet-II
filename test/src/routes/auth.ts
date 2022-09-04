import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'

const router = Router()
const ac = new AuthController()

router.post('/signup')

export default router