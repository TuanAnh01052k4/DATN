import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Iproduct, IproductInfor } from '../../interfaces/product'
import { message } from 'antd'
import { addProduct, updateProductInfor } from '../../../services/products'
import { useNavigate } from 'react-router-dom'

const useProductMutation = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey:['PRODUCT'],
        mutationFn: async(option:{action:string,product?:Iproduct,productInfor?:IproductInfor}) =>{
            switch (option.action) {
                case 'add':
                    try {
                        await addProduct(option.product)
                        message.success("Thêm sản phẩm thành công")
                        navigate('/admin/products')
                    } catch (error) {
                        console.log(error)
                        message.error("Thêm sản phẩm thất bại")
                    }
                    break;
                case 'updateInfor':
                    try {
                        await updateProductInfor(option.productInfor)
                    } catch (error) {
                        console.log(error)
                    }
                    break;
                default:
                    break;
            }
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['PRODUCT']})
        }
    })
  return mutation
}

export default useProductMutation