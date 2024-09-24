import {Link} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout.tsx";

function Contact() {
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

            <h1>Contact Page</h1>
        </BasicLayout>
    );
}

export default Contact;