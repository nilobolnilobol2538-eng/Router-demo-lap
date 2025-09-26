import { createBrowserRouter } from "react-router";
import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import ProductPage from "../page/ProductsPage";
import Layout from "../components/Layout";
import { fetchProducts } from "../api/products";

const router = createBrowserRouter([
    {
     path:'/',
     element: <Layout/>,
     children:[
        {index: true,element: <HomePage/>},
        {path:'about',element:<AboutPage/>},
        {path:'products',element:<ProductPage/>,loader:fetchProducts},
     ],
    },
]);
export default router;