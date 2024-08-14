import { useQuery } from '@tanstack/react-query'
import { getAll, getCateById } from '../../../services/categories'



const useCategoryQuery = (id ?: string) => {
    const query = useQuery({
        queryKey:['CATEGORIES', id],
        queryFn:async()=>{
            try {
                const data = id ? await getCateById(id) : await getAll();
                return data;
              } catch (error) {
                console.log(error);
                throw error; // Đảm bảo lỗi được truyền ra để xử lý trong giao diện
              }
        }
    })
  return query
}

export default useCategoryQuery