import express from 'express'
import {Register} from '../Controller/userRegisteration.js'
const router = express.Router()


router.post('/register',Register)
export default router   