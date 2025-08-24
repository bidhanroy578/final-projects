import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuthData from './useAuthData';

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuthData()

    const { data: cart = [], refetch, isLoading } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/carts?email=${user.email}`)
            return response.data
        },
    })
    return { cart, refetch, isLoading }
};

export default useCart;