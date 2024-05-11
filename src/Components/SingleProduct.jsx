import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const SingleProduct = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const query = useLoaderData();
    const { _id, productName, queryTitle, productBrand, dateTime, boycottingReasonDetails, addUser } = query || {}
    console.log(query);
    const handleFormSubmission = () => {
        console.log('form submit');
    }
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] max-w-6xl mx-auto my-5'>
            {/* Job Details */}
            <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
                <div className='flex items-center justify-between'>
                    <span className='text-sm font-light text-gray-800 '>Deadline: {new Date(dateTime).toLocaleDateString()}
                    </span>
                    <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                        Product Name : {productName}
                    </span>
                </div>

                <div>
                    <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                        Product Brand : {productBrand}
                    </h1>

                    <p className='mt-2 text-gray-600 '>Query Title : {queryTitle}</p>
                    <p className='mt-6 text-sm font-bold text-gray-600 '>Query Adder Details:</p>
                    <div className='flex items-center gap-5'>
                        <div>
                            <p className='mt-2 text-sm  text-gray-600 '>Name : {addUser?.name}</p>
                            <p className='mt-2 text-sm  text-gray-600 '>Email : {addUser?.email}</p>
                        </div>
                        <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                            <img src={addUser?.image} alt='' />
                        </div>
                    </div>
                    <p className='mt-6 text-lg font-bold text-gray-600 '>Boycotting Reason : {boycottingReasonDetails}</p>
                </div>
            </div>
            {/* Place A Bid Form */}
            <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Add A Recommendation
                </h2>
                <form onSubmit={handleFormSubmission}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Recommendation Title
                            </label>
                            <input
                                id='price'
                                type='text'
                                name='recommendation_title'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                required
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Recommendation Product Name
                            </label>
                            <input
                                id='price'
                                type='text'
                                name='recommendation_product'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                required
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Recommendation Product Image
                            </label>
                            <input
                                id='price'
                                type='text'
                                name='recommendation_product_img'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                required
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='recommendation_email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>Recommendation Reason</label>
                            <input
                                id='comment'
                                name='comment'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Recommendation Date</label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                        >Recommend</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SingleProduct;