import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import LoadingPage from "../pages/LoadingPage.tsx";

const Loading = <LoadingPage></LoadingPage>
const TodoIndex = lazy(() => import("../pages/todo/TodoIndex"))
const TodoList = lazy(() => import("../pages/todo/TodoListPage"))

const TodoRead = lazy(() => import("../pages/todo/TodoReadPage"))


const todoRouter = {
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
        },
        {
            path: "read/:mno",
            element: <Suspense fallback={Loading}><TodoRead/></Suspense>
        }
    ]
}

export default todoRouter