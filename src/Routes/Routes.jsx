import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import MYQueries from '../Pages/MyQueries';
import AllQueries from '../Pages/AllQueries'
import AddQueries from '../Pages/AddQueries'
import PrivateRoute from '../Context/PrivateRoute';
import SingleProduct from "../Components/SingleProduct";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/my-queries',
                element: <PrivateRoute><MYQueries /></PrivateRoute>
            },
            {
                path: '/all-queries',
                element: <AllQueries />
            },
            {
                path: '/add-queries',
                element: <PrivateRoute><AddQueries /></PrivateRoute>
            },
            {
                path: '/single-queries/:id',
                element: <PrivateRoute><SingleProduct /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/single-queries/${params.id}`)
            }

        ]
    },
]);

export default router;