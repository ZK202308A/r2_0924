import {getList} from "../../api/productAPI.ts";

function ProductListPage() {

    getList()
        .then(data => console.log(data))
        .catch(err => console.log(err))

    return (
        <div>
            <div>Product List Page</div>
        </div>
    );
}

export default ProductListPage;