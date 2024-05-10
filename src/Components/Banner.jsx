import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero h-[400px] my-5 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/kM4sQns/nrd-D6-Tu-L3ch-LE-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Stay Informed, Shop Smart: Product Alerts Made Easy</h1>
                    <p className="mb-5">Get notified about product recalls, safety alerts, and consumer advisories instantly. Keep your purchases safe and informed with our product alert platform. Shop with confidence knowing you are always in the know</p>
                    <Link to="/all-queries" className="btn bg-[#5f3951] dark:bg-indigo-500 dark:text-white">All Queries</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;