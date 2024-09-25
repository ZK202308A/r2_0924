import {ChangeEvent, useState} from "react";

const initialState = {
    pname:'',
    pdesc: '',
    price: 0,
}

function ProductAddPage() {

    const [product, setProduct] = useState({...initialState})

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        product[e.target.name] = e.target.value
    }

    const handleClick = () => {
        console.log(product)
    }


    return (
        <div>
            <div>Product Add Page</div>

            <div>

                <input type='text' name='pname' placeholder='Product Name' onChange={(e) =>handleChange(e)} />
                <input type='text' name='pdesc' placeholder='Product Desc' onChange={(e) =>handleChange(e)}/>
                <input type='number' name='price' placeholder='1000' onChange={(e) =>handleChange(e)}/>
                <input type='file' name='files' multiple={true}/>

                <button onClick={handleClick}>ADD</button>

            </div>


        </div>
    );
}

export default ProductAddPage;