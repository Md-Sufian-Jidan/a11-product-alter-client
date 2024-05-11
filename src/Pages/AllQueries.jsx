import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";

const AllQueries = () => {
    const [queries, setQueries] = useState();
    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries`);
        setQueries(data);
    };
    console.log(queries);
    return (
        <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    queries?.map(query => <ProductDetails key={query._id} query={query}></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default AllQueries;