import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import Main from "../../layout/Main";

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
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])