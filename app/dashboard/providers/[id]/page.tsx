import { API_URL } from "../../../../constants"
import { authHeaders } from "helpers/authHeaders"
import ProviderCard from "../_components/ProviderCard"
import { Products, Provider } from "entities"
import Link from "next/link"
import ProductCard from "./_components/ProductCard"

export default async function ProviderPage({params}: {params: {id: string}}) {
    const provider : Provider = await (await fetch(`${API_URL}/providers/${params.id}`, {
        headers: {
            ...(await authHeaders())
        }
    })).json()
    return (
        <div className="flex flex-col px-10 gap-10 h-[90vh] pt-10">
            <ProviderCard provider={provider} />
            {
                provider.products?.map((producto: Products) => (
                    <Link 
                        href={{ pathname: `/dashboard/products/${producto.productId}`}}
                        key={producto.productId}
                    >
                    <ProductCard key={producto.productId} 
                        producto={producto} 
                    />
                    </Link>
                ))
            }
        </div>
    )
}