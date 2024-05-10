import Banner from "../../Components/Banner";
import Carousel from "../../Components/Carousel";
import ProductCart from "../../Components/ProductCart";

const Home = () => {
    return (
        <div>
            {/* <p>slider</p> */}
            <Carousel />
            {/* <p>banner</p> */}
            <Banner />
            {/* <p>card section</p> */}
            <ProductCart />
        </div>
    );
};

export default Home;