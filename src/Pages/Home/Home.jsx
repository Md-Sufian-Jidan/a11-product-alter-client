import Banner from "../../Components/Banner";
import Carousel from "../../Components/Carousel";
import Faq from "../../Components/Faq";
import ProductCart from "../../Components/ProductCart";
import SustainabilityTips from "../../Components/SustainabilityTips";

const Home = () => {
    return (
        <div>
            {/* <p>slider</p> */}
            <Carousel />
            {/* <p>banner</p> */}
            <Banner />
            {/* <p>card section</p> */}
            <ProductCart />
            {/* faq */}
            <Faq />
            {/* get in touch */}
            <SustainabilityTips />
        </div>
    );
};

export default Home;