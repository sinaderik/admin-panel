import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/Login";
import Register from "./features/identity/components/Register";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/main-layout";
import { registerAction } from "./features/identity/components/Register";
import { loginAction } from "./features/identity/components/Login";
import Courses from "./pages/courses";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />,
        children:[{
            element:<Courses />,
            index:true
        }]
    },
    {
        element: <IdentityLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
                action: loginAction,
                errorElement: <Login />
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