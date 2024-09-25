import {useState} from "react";


const useCustomML = () => {

    const [loading, setLoad] = useState(false)

    // @ts-ignore
    const setLoading = (value) => {
        setLoad(value)
    }

    const [resultData, setData] = useState<string>('')

    // @ts-ignore
    const setResultData = (value: string):void => {
        setData(value)
    }

    return {loading, resultData, setLoading, setResultData}
}


export default useCustomML