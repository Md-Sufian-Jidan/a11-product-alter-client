import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div>
                <img className="h-[300px] mx-auto" src="https://i.ibb.co/n6GfdzG/monitor-1350918-1280.png" alt="" />
            </div>
            <div className="text-center space-y-5">
                <h3 className="font-bold">404 error</h3>
                <h1 className='text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
                    Page not found
                </h1>
                <p className='mt-4 text-gray-500 dark:text-gray-400'>
                    Sorry, the page you are looking for does not exist.Here are some
                    helpful links:
                </p>
                <div>
                    <Link to="/" className="btn bg-[#7dce7d] dark:bg-pink-300">Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;