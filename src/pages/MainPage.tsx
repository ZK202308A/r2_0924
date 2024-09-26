import BasicLayout from "../layouts/BasicLayout.tsx";

import { useAppSelector, useAppDispatch } from '../hooks/rtk.ts'
import {useCallback} from "react";
import {increment} from "../slices/countSlice.ts";

function MainPage() {

    const dispatch = useAppDispatch();
    const countState = useAppSelector(state => state.count);

    console.log(countState)

    const handleClick = useCallback(() => {
        dispatch(increment(null))
    },[])

    return (
        <BasicLayout>

            <div className='text-7xl underline'>Main Page {countState.num}</div>

            <button onClick={handleClick}>CLICK</button>

        </BasicLayout>
    );
}

export default MainPage;