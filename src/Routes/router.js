import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Main/Main";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductList from "../pages/Dashboard/ProductList";
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
                loader: ({params})=> fetch(`https://fine-blog-server-side.vercel.app/details/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <ProductList></ProductList>
            },
            {
                path: 'add-product',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])