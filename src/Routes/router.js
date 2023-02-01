import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import History from "../pages/History/History";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/history',
                element: <History></History>
            },
            {
                path: '/details/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    }
])