import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const MyQueries = () => {
    const { user } = useContext(AuthContext)
    const [queries, setQueries] = useState([])

    useEffect(() => {
        getData()
    }, [user]);

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/my-queries/${user?.email}`, { withCredentials: true });
        setQueries(data);
    };
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/deleted/${id}`, { withCredentials: true })
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Query has been deleted.",
                        icon: "success"
                    });
                    //refresh ui
                    getData()
                } catch (err) {
                    toast.error(err.message)
                }
            }
        });
    }
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center my-5 gap-5">
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 rounded-xl">
                    <img className="w-full h-full lg:max-w-3xl" src="https://i.ibb.co/9v7whm5/istockphoto-950216174-1024x1024.jpg" alt="Catalogue-pana.svg" />
                </div>
                {/* banner text */}
                <div className="lg:w-1/2 mx-10 ">
                    <div className="lg:max-w-lg mx-auto">
                        <h1 className="text-3xl font-semibold text-pink-800/80 lg:text-4xl">Stay Informed, Speak Up: Explore Product <span className="text-blue-500 ">Queries</span></h1>

                        <p className="mt-3 text-gray-600 dark:text-gray-400">Discover and engage with queries related to product safety, quality, and transparency. Join the conversation, ask questions, and share insights to empower consumers and promote accountability in the marketplace. Together, we can drive positive change and advocate for safer products for all</p>

                        <Link to="/add-queries" className="w-full mt-3 btn text-white bg-blue-600 rounded-lg  hover:bg-blue-400 btn-outline">Add Queries</Link>
                    </div>
                </div>
            </div>
            {/* showing queries data in table format */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                {
                    queries?.map((query) => (
                        <div key={query._id} className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-slate-800/80">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">Posted Date : {new Date(query.dateTime).toLocaleDateString()}</span>
                                <Link to={`/update/${query?._id}`} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" role="button">Update</Link>
                            </div>

                            <div className="mt-2">
                                <p href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 " role="link">Product Name : {query.productName}</p>
                                <p href="#" className="text-lg font-semibold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 " role="link">Product Brand : {query.productBrand}</p>
                                <p title={query?.boycottingReasonDetails} className="mt-2 text-gray-600 dark:text-gray-300">Boycotting Reason : {query.boycottingReasonDetails?.substring(0, 10)}...</p>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <Link to={`/single-queries/${query?._id}`} href="#" className="text-blue-600 dark:text-blue-400 hover:underline" role="link">View Details</Link>

                                <button onClick={() => handleDelete(query?._id)} className="text-rose-600 dark:text-rose-400 hover:underline" role="link">Delete</button>

                                <div className="flex items-center">
                                    <img className=" object-cover w-10 h-10 mx-4 rounded-full sm:block" src={query?.addUser.image} alt="avatar" />
                                    <a href="#" className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" role="link">{query?.addUser?.name}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyQueries;