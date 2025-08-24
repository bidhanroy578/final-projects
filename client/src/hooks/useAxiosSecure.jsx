import axios from 'axios'
import useAuthData from './useAuthData';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-one.vercel.app'
})
const useAxiosSecure = () => {

    const { logout } = useAuthData()
    const navigate = useNavigate()

    //interceptors for requests 

    axiosSecure.interceptors.request.use(config => {
        config.headers.authentication = `Bearer ${localStorage.getItem('access-token')}`
        // console.log('this is from the interceptor axiosSecure ', config.headers.authentication)
        return config;
    }, error => {
        // Do something with request error
        return Promise.reject(error);
    });

    // interceptors for responses 

    axiosSecure.interceptors.response.use(response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async error => {
        // console.log('this is from response interceptor when error happens', error.response.status)
        const status = error.response.status
        if (status === 401 || status === 403) {
            //todo: logout the user and redirect to the login page
            console.log('error 401 or 403 happened ')
            await logout()
            navigate('/authenticate/signin')
        }

        return Promise.reject(error);
    });

    return axiosSecure
};

export default useAxiosSecure;