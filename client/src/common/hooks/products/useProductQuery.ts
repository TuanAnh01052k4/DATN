import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from '../../../services/products'


const useProductQuery = (id?:string|number) => {
    const query = useQuery({
        queryKey: ['PRODUCT',id],
        queryFn: async () => {
            try {
                const data = id? await getProductById(id) : await getProducts()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })
    return query
}

export default useProductQuery