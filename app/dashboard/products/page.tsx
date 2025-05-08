import { Products } from "entities";
import { API_URL } from "../../../constants";
import { authHeaders } from "helpers/authHeaders";
import FilterCards from "./_components/FilterCards";

const ProductsPage = async () => {
    const response = await fetch(`${API_URL}/products`, {
        headers: {
            ...(await authHeaders()),
        },
        next: {
            tags: ["dashboard:products"]
        }
    });
    const products : Products[] = await response.json();
    return (
        <div>
            <FilterCards products={products}/>
        </div>
    )
}

export default ProductsPage;