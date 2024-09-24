import {Link} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout.tsx";

function MainPage() {
    return (
        <BasicLayout>

            <div className='flex justify-center m-6'>
                <div className='m-3 bg-blue-600 underline'>
                    <Link to="/">Main</Link>
                </div>

                <div className='m-3 bg-blue-600 underline'>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>

            <div className='text-7xl underline'>Main Page</div>
        </BasicLayout>
    );
}

export default MainPage;