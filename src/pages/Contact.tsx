import BasicLayout from "../layouts/BasicLayout.tsx";
import useCount from "../hooks/useCount.ts";

function Contact() {

    const {countState,dec} = useCount()

    return (
        <BasicLayout>
            <h1 onClick={dec}>Contact Page  {countState.num}</h1>
        </BasicLayout>
    );
}

export default Contact;