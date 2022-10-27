import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Checkout from "../../Checkout/Checkout";
import Courses from "../../Courses/Courses";
import Details from "../../Details/Details";
import Error from "../../Error/Error";
import FAQ from "../../FAQ/FAQ";
import Home from "../../Home/Home";
import Main from "../../layout/Main";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                loader: () => fetch('https://assignment-10-server-steel-ten.vercel.app/courses')
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
                loader: ({params}) => fetch(`https://assignment-10-server-steel-ten.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:title',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-server-steel-ten.vercel.app/checkout/${params.title}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ],
        errorElement: <Error></Error>
    }
])