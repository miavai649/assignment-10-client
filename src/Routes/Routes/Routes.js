import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Checkout from "../../Checkout/Checkout";
import Courses from "../../Courses/Courses";
import Details from "../../Details/Details";
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
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/checkout/:title',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.title}`)
            }
        ],
        errorElement: <Error></Error>
    }
])