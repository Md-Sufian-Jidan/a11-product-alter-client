import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../Context/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const UpdateQueries = () => {
    const { user } = useContext(AuthContext);
    const query = useLoaderData();
    const { _id, productName, queryTitle, productBrand, dateTime, productImgUrl, boycottingReasonDetails, addUser } = query || {}
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.name.value;
        const productBrand = form.brand.value;
        const productImgUrl = form.photo.value;
        const queryTitle = form.better.value;
        const boycottingReasonDetails = form.description.value;
        const dateTime = startDate;
        const addUser = {
            email: user?.email,
            name: user?.displayName,
            image: user?.photoURL
        }
        const product = {
            productName, productBrand, productImgUrl, dateTime, queryTitle, boycottingReasonDetails, addUser
        };
        // save data in db
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/update/${_id}`, product)
            toast.success('Product Data Updated Successfully!')
            navigate('/my-queries');
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div>
            {/* Place A Bid Form */}
            <section className='p-6 w-full rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-2xl text-center font-semibold text-gray-700 capitalize dark:text-emerald-500'>
                    Update A Product
                </h2>
                {/* onSubmit={handleFormSubmission} */}
                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 w-3/4 mx-auto'>
                        <div>
                            <label className='text-gray-700 dark:text-cyan-600' htmlFor='job_title'>
                                Product Name
                            </label>
                            <input
                                defaultValue={productName}
                                id='job_title'
                                name='name'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 dark:bg-teal-300 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 dark:text-cyan-600' htmlFor='job_title'>
                                Product Brand
                            </label>
                            <input
                                defaultValue={productBrand}
                                id='job_title'
                                name='brand'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 dark:bg-teal-300 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 dark:text-cyan-600' htmlFor='job_title'>
                                Product Image Url
                            </label>
                            <input
                                defaultValue={productImgUrl}
                                id='job_title'
                                name='photo'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 dark:bg-teal-300 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 dark:text-cyan-600' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={addUser.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 dark:bg-teal-300 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 dark:text-cyan-600'>Posted Date</label>
                            {/* Date Picker Input Field */}
                            <DatePicker
                                defaultValue={dateTime}
                                className='border p-2 rounded-md w-full dark:bg-teal-300'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 dark:text-cyan-600' htmlFor='min_price'>
                                Query Title
                            </label>
                            <input
                                defaultValue={queryTitle}
                                id='min_price'
                                name='better'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 dark:bg-teal-300 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 dark:text-cyan-600' htmlFor='description'>
                            Boycotting Reason
                        </label>
                        <textarea
                            defaultValue={boycottingReasonDetails}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 dark:bg-teal-300 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-indigo-700 rounded-md hover:bg-indigo-500 
                        hover:text-pink-500 focus:outline-none focus:bg-gray-600'>
                            Update Product
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateQueries;