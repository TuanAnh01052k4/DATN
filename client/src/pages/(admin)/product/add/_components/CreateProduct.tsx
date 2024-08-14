/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { Igallery } from '../../../../../common/interfaces/product'

import useProductMutation from '../../../../../common/hooks/products/useProductMutation'



const CreateProduct = () => {
    const [checkAdd, setCheckAdd] = useState(false)
    const productMutation = useProductMutation()
    const attributes = useSelector((state:any)=>state.product.attributes)
    const gallerys = useSelector((state:any)=>state.product.gallerys)
    const sizes = useSelector((state:any)=>state.product.sizes)
    const colors = useSelector((state:any)=>state.product.colors)
    const productInfor = useSelector((state:any)=>state.product.productInfor)
    const isSave = useSelector((state:any)=>state.product.isSave)
    useEffect(()=>{
       if(gallerys.length == 0){
        setCheckAdd(false)
       }else{
        setCheckAdd(!gallerys?.some((item:Igallery)=> item.check == false))
       }
    },[gallerys])
    const onCreateProduct = () =>{
        if(Object.keys(productInfor).length == 0){
            return message.error("Vui lòng nhập dữ liệu thông tin sản phẩm")
        }
        if(isSave == false) return  message.error("Bạn chưa lưu thay đổi thông tin sản phẩm")
        const newProduct = {
            ...productInfor,
            sizes:sizes,
            colors:colors,
            gallerys:gallerys,
            attributes:attributes
        }
        productMutation.mutate({action:'add',product:newProduct})
    }
  return (
    <div>
    {checkAdd && (<div className='flex justify-center items-end'>
        <Button onClick={onCreateProduct} className='bg-black text-white  mx-auto'><PlusOutlined /> Sản phẩm</Button>
    </div>)}
  </div>
  )
}

export default CreateProduct