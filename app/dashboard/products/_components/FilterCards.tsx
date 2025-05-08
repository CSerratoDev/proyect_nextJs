'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Products } from "entities";
import { Input } from "@heroui/react";

export default function FilterCards ({products}: {products: Products[]}) {
    const [filtered, setFiltered] = useState<string>("");
    const [productsList, setProductsList] = useState<Products[]>(products);
    useEffect(() => {
        const filterProducts = products.filter((product) => {
            if(product.productName.toLowerCase().includes(filtered.toLowerCase())) {
                return true;
            } else return false;
        })
        setProductsList(filterProducts);
    }, [filtered]); 
    return (
        <>
        <Input onChange={(e) => {
            setFiltered(e.target.value)
        }}
            label="Nombre del producto"
        /> 
            {productsList.map((producto) => {
                return (
                    <Link key={producto.productId} href={{ pathname : `/dashboard/products/${producto.productId}`}} className="hover:scale-110">
                        <ProductCard producto={producto}/>
                    </Link>
                )
            })}
        </>
    )
}