import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ICategories } from '../../interfaces/categories'
import { create, deleteCate, update } from '../../../services/categories'

const useCategoryMutation = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey: ['CATEGORIES'],
        mutationFn: async (options: { action: string, category: ICategories, isOther?:boolean }) => {
            switch (options.action) {
                case "add":
                    try {
                        const response = await create(options.category)
                        message.success("Thêm thành công")
                       if(options.isOther == false || options.isOther == undefined){
                        navigate(`/admin/categories`)
                       }
                        return response.data
                    } catch (error) {   
                        return message.error("Thêm thất bại")
                    }
                    break;
                    
                case "update":
                    try {
                        const response = await update(options.category)
                        message.success("Cập nhật thành công")
                        navigate(`/admin/categories`)
                        return response.data
                    } catch (error) {   
                        return message.error("Cập nhật thất bại")
                    }
                    break;

                case "delete":
                    try {
                        await deleteCate(options.category)
                        message.success("Xóa thành công")
                    } catch (error) {
                        return error
                    }
                    break;

                default:
                    break;
            }
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['CATEGORIES'] })
        },
    })
    return mutation
}

export default useCategoryMutation