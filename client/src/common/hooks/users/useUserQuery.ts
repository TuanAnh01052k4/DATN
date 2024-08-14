import { useQuery } from '@tanstack/react-query'
import { Iuser } from '../../interfaces/auth'
import { getAllUser, getByIdUser } from '../../../services/auth'


const useUserQuery = (_id?:Iuser) => {
    const query = useQuery({
        queryKey:['USER',_id],
        queryFn: async()=>{
          try {
            return _id? await getByIdUser(_id): await getAllUser()
          } catch (error) {
            console.log(error)
          }
        }
    })
  return query
}

export default useUserQuery