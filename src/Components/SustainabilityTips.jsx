const SustainabilityTips = () => {
    return (
        <div>
            <div className="text-center space-y-5 mx-20 my-5">
                <h3 className="text-3xl">Sustainability Tips</h3>
                <p className="text-xl font-semibold">Explore practical tips and advice for living a more sustainable lifestyle. From eco-friendly practices to reducing waste, discover simple yet impactful ways to make a positive difference for the planet</p>
            </div>
            <div>
                <section className="bg-white dark:bg-indigo-500/40 my-5 rounded-2xl">
                    <div className="container px-6 py-10 mx-auto">
                        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                            <div className="lg:flex items-center">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.ibb.co/qmqJTpG/6747222.jpg" alt="" />
                                <div className="flex flex-col justify-between py-6 lg:mx-6 space-y-3">
                                <h3 href="#" className="text-xl font-semibold text-gray-800 dark:text-white ">10 Easy Ways to Reduce Plastic Waste</h3>
                                    <p className="text-lg font-semibold text-gray-800 dark:text-white ">
                                    Discover the environmental benefits of composting and learn how to create your own compost bin at home. Turn food scraps and yard waste into nutrient-rich soil for your garden.
                                    </p>

                                    <span className="text-sm text-gray-500 dark:text-white">On: 20 October 2023</span>
                                </div>
                            </div>

                            <div className="lg:flex items-center">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.ibb.co/RBHz4X0/compost-still-life-concept-1.jpg" alt="" />
                                <div className="flex flex-col justify-between py-6 lg:mx-6 space-y-3">
                                    <h3 href="#" className="text-xl font-semibold text-gray-800 dark:text-white ">
                                    The Benefits of Composting: How to Start Your Own Compost Bin
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-800 dark:text-white ">
                                    Discover the environmental benefits of composting and learn how to create your own compost bin at home. Turn food scraps and yard waste into nutrient-rich soil for your garden.
                                    </p>

                                    <span className="text-sm text-gray-500 dark:text-white">On: 30 September 2023</span>
                                </div>
                            </div>

                            <div className="lg:flex items-center">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.ibb.co/BN2XVkG/light-bulb-with-miniature-house-1.jpg" alt="" />

                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <h3 className="text-xl font-semibold text-gray-800  dark:text-white ">
                                    Energy-Saving Tips for a Greener Home
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-800  dark:text-white ">
                                    Learn practical strategies for reducing energy consumption and lowering your carbon footprint at home. From installing energy-efficient appliances to implementing smart thermostat settings, find ways to save energy and money.
                                    </p>

                                    <span className="text-sm text-gray-500 dark:text-white">On: 13 October 2019</span>
                                </div>
                            </div>

                            <div className="lg:flex items-center">
                                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.ibb.co/mqxXz9S/personal-shopper-helping-cutomer-1.jpg" alt="" />

                                <div className="flex flex-col justify-between py-6 lg:mx-6 space-y-3">
                                <h3 className="text-xl font-semibold text-gray-800  dark:text-white ">The Impact of Fast Fashion: How to Support Sustainable Clothing Choices</h3>
                                    <p className="text-lg font-semibold text-gray-800  dark:text-white ">Explore the environmental and social consequences of fast fashion and discover alternatives for building a more sustainable wardrobe. Learn about ethical fashion brands, thrift shopping, and clothing rental services.</p>

                                    <span className="text-sm text-gray-500 dark:text-white">On: 30 October 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SustainabilityTips;