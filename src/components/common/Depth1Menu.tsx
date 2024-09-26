import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/rtk.ts";
import {signout} from "../../slices/signinSlice.ts";


function Depth1Menu() {

    const member = useAppSelector(state => state.signin);
    const dispatch = useAppDispatch();
    const handleClickSignout = () => {
        dispatch(signout(null))
    }

    return (
        <>
            {/* 네비게이션 */}
            <nav className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                <Link to="/todo" className="text-gray-700 hover:text-blue-500">Todo</Link>
                <Link to="/product/add" className="text-gray-700 hover:text-blue-500">Product</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
            </nav>

            {/* CTA 버튼 */}
            <div className="hidden md:block">

                {member.email ?
                    <div>
                        {member.email} 님
                        <div onClick={handleClickSignout} >Signout</div>
                    </div>
                    :
                    <Link to="/member/signin"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                        Signin
                    </Link>
                }
            </div>
        </>
    );
}

export default Depth1Menu;