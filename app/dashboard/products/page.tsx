import { Products } from "entities";
import { API_URL } from "../../../constants";
import { authHeaders } from "helpers/authHeaders";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";

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
                    <Link key={producto.productId} href={{ pathname : `/dashboard/products/${producto.productId}`}} className="hover:scale-110">
                        <ProductCard producto={producto}/>
                    </Link>
                )
            })

            }
        </div>
    )
}

export default ProductsPage;