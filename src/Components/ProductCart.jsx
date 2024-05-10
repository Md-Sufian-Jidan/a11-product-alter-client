import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";


const ProductCart = () => {
    const [queries, setQueries] = useState();
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/queries`)
            .then(res => res.json())
            .then(data => setQueries(data))
    }, [])
    return (
        <div className="my-5 space-y-5">
            <div className="text-center mx-10 mb-5 space-y-3">
                <h1 className="lg:text-3xl text-xl font-bold">Explore Organic Excellence: Discover Our Premium Products</h1>
                <p className="md:text-xl font-semibold">Indulge in nature is finest with our curated selection of organic products. From nourishing skincare essentials to wholesome pantry staples, each product is thoughtfully crafted to bring you the purest ingredients and the highest quality. Dive into a world of organic excellence and embrace a healthier, more sustainable lifestyle today</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    queries?.map(query => <ProductDetails key={query._id} query={query}></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default ProductCart;