import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetails from "../Components/ProductDetails";

const AllQueries = () => {
    const [queries, setQueries] = useState();
    const [grid, setGrid] = useState(3);
    const [search, setSearch] = useState('');
    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries?search=${search}`, { withCredentials: true });
        setQueries(data);
    };
    return (
        <div className="my-5">
            <div className="my-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                <div className="text-center">
                    <p className="text-2xl font-bold">You Can Change the Layout</p>
                    <div className="my-5 space-x-5">
                        <button className="btn bg-[#ca6aca] hover:bg-amber-300" onClick={() => setGrid(2)}>2 Column</button>
                        <button className="btn bg-violet-600/50 hover:bg-amber-300" onClick={() => setGrid(3)}>3 Column</button>
                        <button className="btn bg-[#8d3dbb] hover:bg-amber-300" onClick={() => setGrid(4)}>4 Column</button>
                    </div>
                </div>
                <form>
                    <label className="input input-bordered flex items-center gap-2 mx-10">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            type="text"
                            className="grow"
                            placeholder="Search" />
                        <span
                            onClick={getData}
                            className="btn bg-sky-400/60">Search</span>
                    </label>
                </form>
            </div>
            {/* all queries */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${grid} lg:gap-1 gap-5`}>
                {
                    queries?.map(query => <ProductDetails key={query._id} query={query}></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default AllQueries;