'use client'
import { Input } from "@heroui/react";
import { Products } from "entities";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function FilterCards({ products }: { products: Products[] }) {
    const [filter, setFilter] = useState('');
    const filteredList = products.filter(product => 
        product.productName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="flex flex-wrap md:justify-center">
            <div className="md:w-1/3 w-full">
                <Input id="filter-input" type="text" placeholder="Product Name" value={filter} onChange={(e) => setFilter(e.target.value)}/>
            </div>
            <div className="flex flex-wrap justify-center md:w-full p-3 gap-3">
                {filteredList.map((product, index) => (
                    <ProductCard key={index} producto={product}/>
                ))}
            </div>
        </div>
    )
}
