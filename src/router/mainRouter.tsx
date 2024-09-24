import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";
import Contact from "../pages/Contact.tsx";


const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    }
])

export default mainRouter