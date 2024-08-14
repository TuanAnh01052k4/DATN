/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Iattribute, Igallery, InewColor, InewSize } from '../../interfaces/product'
import { message } from 'antd'
import { addColorProduct, addSizeProduct, deleteColorProduct, deleteSizeProduct, updateProductAttribute, updateProductGallery } from '../../../services/products'
import { IColor } from '../../interfaces/Color'
const useAttributeMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey: ['PRODUCT'],
        mutationFn: async (option: { action: string,size?:string|any, color?:IColor|any, gallery?: Igallery | any, productId: string | number | any, newSize?: InewSize | any, newColor?: InewColor | any, attribute?: Iattribute | any }) => {
            switch (option.action) {
                case 'updateGallery':
                    try {
                        await updateProductGallery(option.productId, option.gallery)
                        message.success("Cập nhật ảnh thành công")
                    } catch (error) {
                        console.log(error)
                        message.error("Cập nhật ảnh thất bại")
                    }
                    break;
                case 'updateAtb':
                    try {
                        await updateProductAttribute(option.productId, option.attribute)
                    } catch (error) {
                        console.log(error)
                    }
                    break;
                case 'addSizes':
                    try {
                        await addSizeProduct(option.productId, option.newSize)
                    } catch (error) {
                        console.log(error)
                    }
                    break;
                case 'addColors':
                    try {
                        await addColorProduct(option.productId, option.newColor)
                    } catch (error) {
                        console.log(error)
                    }
                    break;
                    case 'deleteSize':
                        try {
                            await deleteSizeProduct(option.productId, option.size)
                        } catch (error) {
                            console.log(error)
                        }
                        break;
                        case 'deleteColor':
                            try {
                                await deleteColorProduct(option.productId, option.color)
                            } catch (error) {
                                console.log(error)
                            }
                            break;
                default:
                    break;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['PRODUCT'] })
        }
    })
    return mutation
}

export default useAttributeMutation