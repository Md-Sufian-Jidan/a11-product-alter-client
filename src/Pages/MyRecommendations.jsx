import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";


const MyRecommendations = () => {
    const { user } = useContext(AuthContext);

    const [recommendation, setRecommendation] = useState([])

    useEffect(() => {
        getData()
    }, [user]);

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-recommendation/${user?.email}`, { withCredentials: true });
        setRecommendation(data);
    };
    const handleDelete = (id, que_id) => {
        console.log(id, que_id);
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
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/recommendation-delete/${id}&${que_id}`,)
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
        <section className="container px-4 mx-auto my-5">
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-slate-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-pink-800/80">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Query Product</th>

                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-x-3">
                                                <span>Alternative product</span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <button className="flex items-center gap-x-2">
                                                <span>Recommendation Date</span>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <button className="flex items-center gap-x-2">
                                                <span>Recommendation Reason</span>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Recommender Email address</th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <span className="">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-indigo-900/80">
                                    {
                                        recommendation?.map((rec) => (
                                            <tr key={rec._id}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">

                                                        <div className="flex items-center gap-x-2">
                                                            <h2 className="font-medium text-gray-800 dark:text-white ">{rec?.query_product}</h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">

                                                        <div className="flex items-center gap-x-2">
                                                            <img className="object-cover w-10 h-10 rounded-full" src={rec?.recommendation_product_img} alt="" />
                                                            <div>
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">{rec?.recommendation_product}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800">

                                                        <h2 className="text-sm font-normal text-emerald-500">{new Date(rec.recommendation_date).toLocaleDateString()}</h2>
                                                    </div>
                                                </td>
                                                <td title={rec?.recommendation_reason} className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{rec?.recommendation_reason?.substring(0, 20)}</td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{rec?.recommendation_email}</td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-6">
                                                        <button onClick={() => handleDelete(rec?._id, rec?.query_id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"><MdDelete size={20} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyRecommendations;