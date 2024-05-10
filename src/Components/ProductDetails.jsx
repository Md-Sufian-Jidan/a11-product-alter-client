import { Link } from 'react-router-dom';

const ProductDetails = ({ query }) => {
    const { _id, productName, queryTitle, productBrand, dateTime, boycottingReasonDetails } = query || {}
    return (
        <Link
            to={`/single-queries/${_id}`}
            className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all mx-auto dark:bg-yellow-400'>
            <div className='flex items-center justify-between'>
                <span className='text-xs font-light text-gray-800 '>
                    Deadline: {new Date(dateTime).toLocaleDateString()}
                </span>
                <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '> Product Name : {productName}</span>
            </div>
            <div>
                <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                    Product Brand : {productBrand}
                </h1>
                <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                    {queryTitle}
                </h1>

                <p title={boycottingReasonDetails} className='mt-2 text-sm text-gray-600 '>
                    {boycottingReasonDetails.substring(0, 70)}...
                </p>
                {/* <p className='mt-2 text-sm font-bold text-gray-600 '>Range: ${min_price} - ${max_price}</p> */}
            </div>
        </Link>
    );
};

export default ProductDetails;