import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPageResponse} from "../../types/todo.ts";
import {getTodoList} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import PageComponent from "../common/PageComponent.tsx";


const initialState = {
    content: [],
    first: false,
    last: false,
    number: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0
}


function TodoListComponent() {

    const [query] = useSearchParams()
    const page: number = Number(query.get("page")) || 1
    const size: number = Number(query.get("size")) || 10
    const [loading, setLoading] = useState<boolean>(false)

    const [pageResponse, setPageResponse] = useState<IPageResponse>(initialState)
    const location = useLocation()

    useEffect(() => {
        console.log("--------------------")
        setLoading(true)
        getTodoList(page,size).then(data => {
            setPageResponse(data)
            setLoading(false)
        })
    },[query, location.key])


    return (
        <div>
            {loading && <LoadingComponent></LoadingComponent>}
            <div>Todo List Component</div>

            <PageComponent pageResponse={pageResponse}  ></PageComponent>
        </div>
    );
}

export default TodoListComponent;