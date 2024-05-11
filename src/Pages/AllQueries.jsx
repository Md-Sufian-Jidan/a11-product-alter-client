import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";

const AllQueries = () => {
    const [queries, setQueries] = useState();
    // const [grid2, setGrid2] = useState();
    // const [grid3, setGrid3] = useState();
    // const [grid4, setGrid4] = useState();
    const [search, setSearch] = useState();
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        getData()
    }, []);
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries`);
        setQueries(data);
    };
    // const handleGrid = (number) => {
    //     setGrid2(number)
    // }
    console.log(queries);
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(searchText)
    }
    return (
        <div className="my-5">
            {/* className = {`grid grid-cols-${number}`} */}
            {/* <div className="my-5 space-x-5">
                <button className="btn btn-success" onClick={() => handleGrid(2)}>grid 2</button>
                <button className="btn btn-success" onClick={() => handleGrid(3)}>grid 3</button>
                <button className="btn btn-success" onClick={() => handleGrid(4)}>grid 4</button>
            </div> */}
            <section className="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search" />
                </div>
            </section>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
                {
                    queries?.map(query => <ProductDetails key={query._id} query={query}></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default AllQueries;