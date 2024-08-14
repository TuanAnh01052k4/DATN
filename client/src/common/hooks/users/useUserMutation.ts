import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Iuser } from '../../interfaces/auth'
import { creatUser, deleteUser, updateUser, updateUserStatus } from '../../../services/auth'

const useUserMutation = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationKey: ['USER'],
    mutationFn: async (option: { action: string, user: Iuser }) => {
      switch (option.action) {
        case "add":
          try {
            await creatUser(option.user)
          } catch (error) {
            console.log(error)
          }
          break;
        case "update":
          try {
            await updateUser(option.user)
          } catch (error) {
            console.log(error)
          }
          break;
        case "checked":
          try {
            await updateUserStatus(option.user)
          } catch (error) {
            console.log(error)
          }
          break;
        case "delete":
          try {
            await deleteUser(option.user)
          } catch (error) {
            console.log(error)
          }
          break;
        default:
          break;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['USER']
      })
    }
  })
  return mutation
}

export default useUserMutation