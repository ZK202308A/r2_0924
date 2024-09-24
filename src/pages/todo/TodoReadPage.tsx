import {useParams} from "react-router-dom";


function TodoReadPage() {

    const {mno} = useParams()

    console.log(mno)

    return (
        <div></div>
    );
}

export default TodoReadPage;