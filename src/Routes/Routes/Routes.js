import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Courses from "../../Courses/Courses";
import Error from "../../Error/Error";
import FAQ from "../../FAQ/FAQ";
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
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ],
        errorElement: <Error></Error>
    }
])