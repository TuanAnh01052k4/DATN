import express from 'express'
import { creatAddress, deleteAddress, getAllAddress, getByIdAddress, updateAddress } from '../controllers/addressController.js'


const router = express.Router()

router.get('/',getAllAddress)
router.get('/:id',getByIdAddress)
router.delete('/delete/:id',deleteAddress)
router.put('/update/:id',updateAddress)
router.post('/',creatAddress)

export default router