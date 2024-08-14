import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const useApiLocationQuery = () => {
  //api online
  const query = useQuery({
    queryKey: ['LOCATION'],
    queryFn: async () => {
      try {
        const res = await axios.get(`https://esgoo.net/api-tinhthanh/${4}/${0}.htm`)
        return res.data.data
      } catch (error) {
        console.log(error)
      }
    }
  })
  return query
}

export default useApiLocationQuery