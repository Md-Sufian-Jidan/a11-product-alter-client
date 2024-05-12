import { Link } from 'react-router-dom';

const ProductDetails = ({ query }) => {
    const { _id, productName, queryTitle, productBrand, productImgUrl, dateTime, boycottingReasonDetails } = query || {}
    return (

        <div className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-violet-300 w-[310px] mx-auto">
            <div>
                <img className="object-cover w-full h-48 mt-2" src={productImgUrl} alt="Product Image" />
            </div>
            <div className="px-4 py-2 space-y-3">
                <h1 className=" font-bold text-gray-800 uppercase dark:text-white">
                    Product Name : <span className='text-fuchsia-700'>{productName}</span></h1>
                <h1 className="font-bold text-gray-800 uppercase">
                    Product Brand : <span className='text-fuchsia-600'>{productBrand}</span>
                </h1>
                <h1 title={boycottingReasonDetails} className="font-bold text-gray-800 uppercase dark:text-white">
                    Product Brand : <span className='text-fuchsia-500'><span>{boycottingReasonDetails?.substring(0, 15)}</span>...</span>
                </h1>
                {/* <p  className="text-fuchsia-600 dark:text-purple-400">
                    Boycott Reason : </p> */}
            </div>

            <div className="flex items-center justify-between px-4 py-2 bg-pink-900 ">
                <h1 className="text-lg font-bold text-white">Posted Date : {new Date(dateTime).toLocaleDateString()}</h1>
                <Link to={`/single-queries/${_id}`} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View Details</Link>
            </div>
        </div>
    );
};

export default ProductDetails;