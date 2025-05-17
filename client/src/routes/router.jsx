import { createBrowserRouter } from "react-router";
import Root from "../layouts/root/Root";
import OurMenu from "../layouts/our_menu/OurMenu";
import Home from "../layouts/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: Root(),
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