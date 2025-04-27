import { Products } from "entities";
import { API_URL } from "../../../constants";
import { authHeaders } from "helpers/authHeaders";
import ProductCard from "./_components/ProductCard";

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
            {products.map((producto) => {
                return (
                    <ProductCard producto={producto}/>
                )
            })

            }
        </div>
    )
}

export default ProductsPage;