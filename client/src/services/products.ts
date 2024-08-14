import { message } from "antd"
import instance from "../common/config/axios"
import { Iattribute, Igallery, InewColor, InewSize, Iproduct, IproductInfor } from "../common/interfaces/product"
import { IColor } from "../common/interfaces/Color"

export const getProducts = async()=> {
    try {
        const res = await instance.get('/products')
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getProductById = async(id:string|number)=> {
    try {
        const res = await instance.get(`/products/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}
export const addProduct = async(product?:Iproduct)=>{
    try {
        const res = await instance.post('/products',product)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const updateProductInfor = async(productInfor?:IproductInfor) =>{
    try {
        const res = await instance.put(`/products/updateInfor/${productInfor?._id}`,productInfor)
        message.success("Cập nhật thông tin thành công")
        return res.data
    } catch (error) {
        console.log(error)
        message.error("Cập nhật thông tin thất bại")
    }
}

export const updateProductGallery = async(productId:string|number,gallery:Igallery) =>{
    try {
        const res = await instance.put(`/products/updateGallery/${productId}`,gallery)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const updateProductAttribute = async(productId:string|number,attribute:Iattribute) =>{
    try {
        const res = await instance.put(`/products/updateAtb/${productId}`,attribute)
        message.success("Cập nhật số lượng thành công")
        return res.data
    } catch (error) {
        console.log(error)
        message.error("Cập nhật số lượng thất bại")
    }
}

export const addSizeProduct = async (productId:string|number,newSize:InewSize)=>{
    try {
        const res = await instance.put(`/products/addSizes/${productId}`,newSize)
        message.success("Thêm size thành công!")
        return res.data
    } catch (error) {
        console.log(error)
        message.error("Thêm size thất bại!")
    }
} 
export const addColorProduct = async (productId:string|number,newColor:InewColor)=>{
    try {
        const res = await instance.put(`/products/addColors/${productId}`,newColor)
        message.success("Thêm màu sắc thành công!")
        return res.data
    } catch (error) {
        console.log(error)
        message.error("Thêm màu sắc thất bại!")
    }
} 
export const deleteColorProduct = async (productId:string|number,color:IColor)=>{
    try {
        const res = await instance.put(`/products/deleteColor/${productId}`,color)
        message.success("Xóa màu sắc thành công!")
        return res.data
    } catch (error) {
        console.log(error)
        message.error("Xóa màu sắc thất bại!")
    }
}
export const deleteSizeProduct = async (productId:string|number,size:string)=>{
    const option = {
        size:size
    }
    try {
        const res = await instance.put(`/products/deleteSize/${productId}`,option)
        message.success("Xóa size thành công!")
        return res.data
    } catch (error) {
        console.log(error)
        message.error("Xóa size thất bại!")
    }
}
