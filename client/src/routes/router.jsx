import { createBrowserRouter } from "react-router";
import Root from "../layouts/root/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: Root(),
        children: [
            {

            }
        ]
    },
]);

export default router;