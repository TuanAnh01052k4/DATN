import AddressModel from "../models/addressModel.js"
import { StatusCodes } from "http-status-codes";

// lấy toàn bộ thông tin bảng
export const getAllAddress = async (req,res)=>{
    try {
        const address = await AddressModel.find().populate("userID")
        return res.status(StatusCodes.OK).json(address)
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({message:error.message})
    }
}

export const getByIdAddress = async (req,res)=>{
    try {
        const address = await AddressModel.findById(req.params.id)
        if (!address) {
            return res.status(StatusCodes.NOT_FOUND).json({message:"Không tìm thấy ID người dùng này"})
        }
        return res.status(StatusCodes.OK).json(address)
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({message:error.message})
    }
}

export const creatAddress = async (req,res)=>{
    try {
        const address = await AddressModel.create(req.body)
        return res.status(StatusCodes.CREATED).json(address)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message:error.message });
    }
}

export const deleteAddress = async (req,res)=>{
    try {
        const address = await AddressModel.findByIdAndDelete(req.params.id)
        if (!address) {
            return res.status(StatusCodes.NOT_FOUND).json({message:"Không tìm thấy ID người dùng này"})
        }
        return res.status(StatusCodes.OK).json(address)
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({message:error.message})
    }
}

export const updateAddress = async (req,res)=>{
    try {
        const address = await AddressModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(StatusCodes.OK).json(address)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.message})
    }
}