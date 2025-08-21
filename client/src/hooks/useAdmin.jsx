import { useQuery } from "@tanstack/react-query";
import useAuthData from "./useAuthData";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuthData()
    const { data: isAdmin = false, isLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.isAdmin
        }
    })
    return [isAdmin, isLoading]
};

export default useAdmin;