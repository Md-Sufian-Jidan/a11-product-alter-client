import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../Context/AuthProvider';

const AddQueries = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    console.log(user.email);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const date = startDate;
        const addUser = {
            email: user?.email,
            name: user?.displayName,
            image: user?.photoURL
        }
        console.log(name, brand, photo, addUser, date);
        // console.log('object');
    }
    return (
        <div className='bg-[url()]'>
            <div className='text-center space-y-3 md:max-w-3xl mx-10 md:mx-auto'>
                <h3 className='text-3xl font-bold '>Stay Vigilant, Stay Safe: Report Product Alerts</h3>
                <p className='md:text-xl font-semibold'>Join the community in ensuring product safety and transparency. Share your insights and contribute to a safer marketplace by reporting product alerts. Together, we can make informed choices and protect consumers worldwide</p>
                <p>You can add a product Alternative</p>
            </div>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
                <section className='p-5 md:p-6 mx-auto bg-white rounded-md shadow-md w-3/4 m-auto'>
                    <h2 className='text-lg font-semibold text-gray-700 capitalize text-center'>
                        Post a Job
                    </h2>

                    <form onSubmit={handleFormSubmit}>
                        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 w-3/4 mx-auto'>
                            <div>
                                <label className='text-gray-700 ' htmlFor='job_title'>
                                    Product Name
                                </label>
                                <input
                                    id='job_title'
                                    name='name'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='job_title'>
                                    Product Brand
                                </label>
                                <input
                                    id='job_title'
                                    name='brand'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='job_title'>
                                    Product Image Url
                                </label>
                                <input
                                    id='job_title'
                                    name='photo'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 ' htmlFor='emailAddress'>
                                    Email Address
                                </label>
                                <input
                                    id='emailAddress'
                                    type='email'
                                    name='email'
                                    defaultValue={user?.email}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-gray-700'>Posted Date</label>
                                {/* Date Picker Input Field */}
                                <DatePicker
                                    className='border p-2 rounded-md w-full'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 ' htmlFor='min_price'>
                                    Query Title
                                </label>
                                <input
                                    id='min_price'
                                    name='better'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
                            ></textarea>
                        </div>
                        <div className='flex justify-end mt-6'>
                            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                Add Product
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddQueries;