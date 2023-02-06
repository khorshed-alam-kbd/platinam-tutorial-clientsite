import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../Shared/Login/Login";
import Page404 from "../Shared/Page404/Page404";
import Registration from "../Shared/Registration/Registration";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },

            {
                path: '/login',
                element: <Login></Login>,
            },

            {
                path: '/register',
                element: <Registration></Registration>,
            },
            // {
            //     path: '/blog',
            //     element: <Blog></Blog>,
            // },

            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://platinam-tutorial-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://platinam-tutorial-server.vercel.app/courses')
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://platinam-tutorial-server.vercel.app/course/${params.id}`)
            },

        ]
    },
    {
        path: '*',
        element: <Page404></Page404>,
    }

]);