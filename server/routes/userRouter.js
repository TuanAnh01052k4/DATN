import express from 'express'
import { add, deleteUser, getAllUser, getByIdUser, login, logout, register, requestRefreshToken, updateUser, updateUserStatus } from '../controllers/userController.js'
import { protectRoute } from '../middleware/checkAuth.js'
const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getByIdUser)
router.delete('/delete/:id', protectRoute.verifyTokenAndAdminAuth, deleteUser)
router.put('/update/status/:id', updateUserStatus)
router.post('/add', add)
router.put('/update/:id', updateUser)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', protectRoute.verifyToken, logout)
router.post('/refresh', requestRefreshToken)
export default router