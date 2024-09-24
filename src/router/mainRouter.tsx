import {createBrowserRouter, Navigate} from "react-router-dom";
import {lazy, Suspense} from "react";
import LoadingPage from "../pages/LoadingPage.tsx";


const MainPage = lazy(() => import("../pages/MainPage"))
const Contact = lazy(() => import("../pages/Contact"))

const TodoIndex = lazy(() => import("../pages/todo/TodoIndex"))
const TodoList = lazy(() => import("../pages/todo/TodoListPage"))

const Loading = <LoadingPage></LoadingPage>

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={Loading}><MainPage/></Suspense> ,
    },
    {
        path: "/contact",
        element: <Suspense fallback={Loading}><Contact/></Suspense>
    },
    {
        path: "/todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: [
            {
                path: "list",
                element: <Suspense fallback={Loading}><TodoList/></Suspense>
            },
            {
                path: "",
                element: <Navigate to='list' replace={true}></Navigate>
            }
        ]
    }
])

export default mainRouter