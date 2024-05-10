import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const SingleProduct = () => {
    const { user } = useContext(AuthContext);
    // const [startDate, setStartDate] = useState(new Date());
    const query = useLoaderData();
    const { _id, productName, queryTitle, productBrand, dateTime, boycottingReasonDetails, addUser } = query || {}
    console.log(query);
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] max-w-6xl mx-auto my-5'>
            {/* Job Details */}
            <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
                <div className='flex items-center justify-between'>
                    <span className='text-sm font-light text-gray-800 '>Deadline: {new Date(dateTime).toLocaleDateString()}
                    </span>
                    <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                        Product Name {productName}
                    </span>
                </div>

                <div>
                    <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                        {productBrand}
                    </h1>
                    <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                        {queryTitle}
                    </h1>

                    <p className='mt-2 text-gray-600 '>{boycottingReasonDetails}</p>
                    <p className='mt-6 text-sm font-bold text-gray-600 '>Posted User:</p>
                    <div className='flex items-center gap-5'>
                        <div>
                            <p className='mt-2 text-sm  text-gray-600 '>Name : {addUser?.name}</p>
                            <p className='mt-2 text-sm  text-gray-600 '>Email : {addUser?.email}</p>
                        </div>
                        <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                            <img src={addUser?.image} alt='' />
                        </div>
                    </div>
                    {/* <p className='mt-6 text-lg font-bold text-gray-600 '>
                        Range: ${min_price} - ${max_price}
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;