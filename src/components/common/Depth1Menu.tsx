import {Link} from "react-router-dom";


function Depth1Menu() {
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
                <Link to="/member/signin"
                   className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                    Signin
                </Link>
            </div>
        </>
    );
}

export default Depth1Menu;