import {useSearchParams} from "react-router-dom";

function TodoListComponent() {

    const [query,setQuery] = useSearchParams()
    const page: number = Number(query.get("page")) || 1
    const size: number = Number(query.get("size")) || 10




    return (
        <div>
            <div>Todo List Component</div>
        </div>
    );
}

export default TodoListComponent;