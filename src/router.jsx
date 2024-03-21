import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/Login";
import Register from "./features/identity/components/Register";
import IdentityLayout from "./layouts/identity-layout";
import { registerAction } from "./features/identity/components/Register";

const router = createBrowserRouter([
    {
        element: <IdentityLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />,
                action: registerAction,
                errorElement: <Register />
            }
        ]
    },

])

export default router