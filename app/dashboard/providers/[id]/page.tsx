import { API_URL } from "../../../../constants"
import { authHeaders } from "helpers/authHeaders"
import { Products, Provider } from "entities"
import Link from "next/link"
import ProductCard from "./_components/ProductCard"
import ProviderCard from "../_components/ProviderCard"
import FormUpdateProvider from "../_components/FormUpdateProvider"

export default async function ProviderPage(props: { params: Promise<{id: string}> }) {
    const {id} = await props.params;

    const provider : Provider = await (await fetch(`${API_URL}/providers/${id}`, {
        headers: {
            ...(await authHeaders())
        },
        next: {
            tags: [`dashboard:providers:${id}`]
        }
    })).json()
    return (
        <div className="flex flex-col px-10 gap-10 h-[90vh] pt-10">
            <div className="flex flex-row">    
                <ProviderCard provider={provider} />
                <FormUpdateProvider provider={provider}/>
            </div>
            {provider.products?.map((producto: Products) => (
                <Link href={{ pathname: `/dashboard/products/${producto.productId}`}} key={producto.productId}>
                    <ProductCard key={producto.productId} producto={producto}/>
                </Link>
            ))}
        </div>
    )
} 
