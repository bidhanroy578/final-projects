import { createBrowserRouter } from "react-router";
import Root from "../layouts/root/Root";
import OurMenu from "../layouts/our_menu/OurMenu";
import Home from "../layouts/home/Home";
import Navbar from "../components/navbar/Navbar";

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
            }
        ]
    },
]);

export default router;