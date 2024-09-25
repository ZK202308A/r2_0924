import {useLocation, useNavigate} from "react-router-dom";


const useCustomMove = (mno:number) => {

    const location = useLocation()
    const navigate = useNavigate()
    const queryString = location.search

    const moveToList = () => {
        navigate({pathname:'/todo/list', search:`${queryString}`})
    }
    const moveToModify = () => {
        navigate({pathname:`/todo/modify/${mno}`, search:`${queryString}`})
    }

    const moveToRead = () => {
        navigate({pathname:`/todo/read/${mno}`, search:`${queryString}`})
    }

    return {moveToList, moveToModify, moveToRead}
}



export default useCustomMove