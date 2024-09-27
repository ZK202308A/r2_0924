import LoadingPage from "../pages/LoadingPage.tsx";
import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";


const Loading = <LoadingPage></LoadingPage>
const ProductIndex = lazy(() => import("../pages/product/ProductIndexPage"))
const ProductAdd = lazy(() => import("../pages/product/ProductAddPage"))

const ProductList = lazy(() => import("../pages/product/ProductListPage"))

const productRouter = {
    path: '/product',
    element: <Suspense fallback={Loading}><ProductIndex/></Suspense>,
    children: [
        {
            path: "add",
            element: <Suspense fallback={Loading}><ProductAdd/></Suspense>,
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><ProductList/></Suspense>,
        },
        {
            path: "",
            element: <Navigate to='list' replace={true}></Navigate>
        }
    ]

}

export default productRouter