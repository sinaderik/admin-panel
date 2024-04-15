import { createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "./features/identity/components/Login";
import Register from "./features/identity/components/Register";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/mainLayout/main-layout";
import { registerAction } from "./features/identity/components/Register";
import { loginAction } from "./features/identity/components/Login";
import Courses, { coursesLoader } from "./pages/courses";
import CourseCategories, { categoriesLoader } from "./pages/CourseCategories";
import CourseDetail, { courseDetailsLoader } from "./features/courses/components/CourseDetail/CourseDetail";
import { CategoryProvider } from "./features/categories/CategoryContext";
import UnhandledException from "./pages/UnhandledException";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <UnhandledException />,
        children: [{
            element: <Courses />,
            loader: coursesLoader,
            index: true
        },
        {
            path: "/course-categories",
            element: (
                <CategoryProvider>
                    <CourseCategories />
                </CategoryProvider>
            ),
            loader: categoriesLoader,
        },
        {
            path: "/courses/:id",
            element: <CourseDetail />,
            loader: courseDetailsLoader,
        }
        ]
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
    {
        path: '*',
        element: <NotFound />
    }
])

export default router