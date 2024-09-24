import {Outlet} from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout.tsx";

function TodoIndex() {
    return (
        <BasicLayout>
            <div> Todo Index Page</div>

            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    );
}

export default TodoIndex;