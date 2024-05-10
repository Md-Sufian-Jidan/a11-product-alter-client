import { Link } from 'react-router-dom';

const ProductDetails = ({ query }) => {
    const { _id, productName, queryTitle, productBrand, productImgUrl, dateTime, boycottingReasonDetails } = query || {}
    return (
        <Link
            to={`/single-queries/${_id}`}
            className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all mx-auto dark:bg-green-500'>
            <div className="card">
                <figure className="px-10 pt-10">
                    <img src={productImgUrl} alt="Shoes" className="rounded-xl h-[200px] w-[350px]" />
                </figure>
                <div className="card-body">
                    <h2 className="md:text-xl font-bold">Product Name : {productName}</h2>
                    <h2 className="md:text-lg font-semibold">Product Brand: {productBrand}</h2>
                    <p>Query Title : {queryTitle}</p>
                    <p title={boycottingReasonDetails}>Boycotting Reason :  {boycottingReasonDetails.substring(0, 20)}...</p>
                    <div>
                        <p>Posted Date : {new Date(dateTime).toLocaleDateString()}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#adfadf]">View Details</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductDetails;