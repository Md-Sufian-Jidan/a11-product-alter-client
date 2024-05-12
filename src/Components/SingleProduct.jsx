import { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const SingleProduct = () => {
    const { user } = useContext(AuthContext);
    const query = useLoaderData();
    const { _id, productName, queryTitle, productBrand, dateTime, boycottingReasonDetails, recommendationCount, addUser } = query || {};
    const [startDate, setStartDate] = useState(new Date());
    const [recommendation, setRecommendation] = useState();
    const navigate = useNavigate();
    console.log(query);
    useEffect(() => {
        getData()
    }, [user]);

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/some-recommendation/${_id}`);
        setRecommendation(data);
    };
    console.log(recommendation);

    const handleFormSubmission = async (e) => {
        if (user?.email === addUser?.email) {
            return toast.error('err');
            // return toast.error('Action not Permitted');
        }
        e.preventDefault();
        const form = e.target;
        // this things are previous
        const query_id = _id;
        const query_title = queryTitle;
        const query_product = productName;
        const posted_query = {
            query_email: addUser?.email,
            query_name: addUser?.name
        }
        const recommendation_title = form.recommendation_title.value;
        const recommendation_product = form.recommendation_product.value;
        const recommendation_product_img = form.recommendation_product_img.value;
        const recommendation_email = form.recommendation_email.value;
        const recommendation_reason = form.recommendation_reason.value;
        const recommendation_date = startDate;
        // console.log(recommendation_array);
        const recommendation_details = {
            query_id, query_title, query_product, posted_query, recommendation_title, recommendation_product, recommendation_product_img, recommendation_email, recommendation_reason, recommendation_date,
        }
        // console.log(recommendation_details);
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/recommendation`, recommendation_details)
            toast.success('Recommendation Data Save Successfully');
            form.reset();
            navigate('/my-recommendations');
        } catch (err) {
            toast.error(err.response?.data);
            form.reset();
        }
    };
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] max-w-6xl mx-auto my-5'>
                {/* Job Details */}
                <div className='flex-1  px-4 py-7 bg-white bg-transparent rounded-md shadow-md md:min-h-[350px]'>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm font-light text-gray-800 '>Deadline: {new Date(dateTime).toLocaleDateString()}
                        </span>
                        <span className='px-4 py-1 text-xs text-blue-800 uppercase'>
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
                        <p>recommendationCount : {recommendationCount}</p>
                        {/* <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="w-1/3 bg-cover"></div>

                        <div className="w-2/3 p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Backpack</h1>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>

                            <div className="flex mt-2 item-center">
                                <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div>

                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                            </div>
                        </div>
                    </div> */}
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
                                    defaultValue={user?.email}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 ' htmlFor='comment'>Recommendation Reason</label>
                                <input
                                    id='comment'
                                    name='recommendation_reason'
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 '>
                {
                    recommendation?.map(rec => (
                        <div key={rec._id} className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto">
                            <img className="object-cover w-full h-56" src={rec?.recommendation_product_img} alt="avatar" />

                            <div className="py-5 px-3">
                                <h3 className="block font-bold text-gray-800 dark:text-white" role="link">Recommendation Product : {rec?.recommendation_product}</h3>
                                <p title={rec?.recommendation_reason} className="text-sm text-gray-700 dark:text-gray-200">Recommendation Reason : {rec?.recommendation_reason?.substring(0, 30)}...</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SingleProduct;