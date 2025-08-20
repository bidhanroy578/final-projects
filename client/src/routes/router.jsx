import { createBrowserRouter } from "react-router";
import Root from "../layouts/root/Root";
import OurMenu from "../layouts/our_menu/OurMenu";
import Home from "../layouts/home/Home";
import Navbar from "../components/navbar/Navbar";
import OurShop from "../layouts/our_shop/OurShop";
import ContactUs from "../layouts/contact_us/ContactUs";
import Authenticate from '../layouts/authenticate/Authenticate'
import PrivateRoute from "./PrivateRoute";
import DashRoot from "../layouts/dashboard/DashRoot";
import MyCart from "../layouts/dashboard/user_dashboard/my_cart/MyCart";
import Signin from "../layouts/authenticate/Signin";
import Signup from "../layouts/authenticate/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: Root(),
        errorElement: <><Navbar /> <h3 className="text-yellow-300 text-4xl top-32 left-[30%] w-fit relative">Page Not Found ....</h3></>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/our-menu",
                element: <OurMenu />,
            },
            {
                path: "/our-shop",
                element: <OurShop />,
            },
            {
                path: "/our-shop/:id",
                element: <OurShop />,
            },
            {
                path: "/contact-us",
                element: <PrivateRoute ><ContactUs /></PrivateRoute>
            },

        ]
    },
    {
        path: '/authenticate',
        element: <Authenticate />,
        children: [
            {
                path: '/authenticate/signin',
                element: <Signin />
            },
            {
                path: '/authenticate/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashRoot />,
        children: [
            {
                path: '/dashboard/user/my_cart',
                element: <MyCart />
            }
        ]
    }
]);

export default router;