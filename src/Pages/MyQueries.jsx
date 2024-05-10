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
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/my-queries/${user?.email}`);
        setQueries(data);
    };
    console.log(queries);
    const handleDelete = (id) => {
        console.log(id);
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
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/deleted/${id}`)
                    console.log(data)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    //refresh ui
                    getData()
                } catch (err) {
                    console.log(err.message)
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
                        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Stay Informed, Speak Up: Explore Product <span className="text-blue-500 ">Queries</span></h1>

                        <p className="mt-3 text-gray-600 dark:text-gray-400">Discover and engage with queries related to product safety, quality, and transparency. Join the conversation, ask questions, and share insights to empower consumers and promote accountability in the marketplace. Together, we can drive positive change and advocate for safer products for all</p>

                        <Link to="/add-queries" className="w-full mt-3 btn text-white bg-blue-600 rounded-lg  hover:bg-blue-400 btn-outline">Add Queries</Link>
                    </div>
                </div>
            </div>
            {/* showing queries data in table format */}
            <div>
                <p className="text-center text-2xl font-bold my-3">My Queries : {queries.length}</p>
            </div>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg my-3'>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                            >
                                <div className='flex items-center gap-x-3'>
                                    <span>Product Name</span>
                                </div>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                            >
                                <span>Product Brand</span>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                            >
                                <button className='flex items-center gap-x-2'>
                                    <span>Posted Date</span>
                                </button>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                            >
                                Posted email
                            </th>
                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                            >
                                boycotting Reason
                            </th>

                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200 '>
                        {queries?.map(job => (
                            <tr key={job._id}>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {job.productName}
                                </td>

                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {job.productBrand}
                                </td>

                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {new Date(job.dateTime).toLocaleDateString()}
                                </td>
                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                    <div className='flex items-center gap-x-2'>
                                        <p
                                            className={`px-3 py-1 text-xs  rounded-full`}
                                        >
                                            {job.addUser.email}
                                        </p>
                                    </div>
                                </td>
                                <td
                                    title={job.boycottingReasonDetails}
                                    className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                                >
                                    {job.boycottingReasonDetails?.substring(0, 10)}...
                                </td>
                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                    <div className='flex items-center gap-x-6'>
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth='1.5'
                                                stroke='currentColor'
                                                className='w-5 h-5'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                                />
                                            </svg>
                                        </button>

                                        <Link
                                            to={`/update/${job._id}`}
                                            className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth='1.5'
                                                stroke='currentColor'
                                                className='w-5 h-5'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyQueries;