import {useState} from "react";


const useCustomML = <E>() => {

    const [loading, setLoad] = useState(false)

    // @ts-ignore
    const setLoading = (value) => {
        setLoad(value)
    }

    const [resultData, setData] = useState<E>()

    // @ts-ignore
    const setResultData = (value: E):void => {
        setData(value)
    }

    return {loading, resultData, setLoading, setResultData}
}


export default useCustomML