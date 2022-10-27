import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Course from "../Pages/Course/Course";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
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
            {
                path: '/blog',
                element: <Blog></Blog>,
            },

            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }



        ]
    },


])