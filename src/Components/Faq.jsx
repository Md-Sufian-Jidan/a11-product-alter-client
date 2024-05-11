
const Faq = () => {
    return (
        <div>
            <div className="space-y-5  mt-10 text-center">
                <h3 className="text-3xl font-bold">Product Alternation FAQ</h3>
                <p className="text-xl font-semibold mx-auto">Find answers to commonly asked questions about product alternation, including details on our sustainable alternatives, eco-friendly practices, and more.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 my-5 mx-3 items-center justify-center">
            <div className="lg:w-1/2">
                <img src="https://i.ibb.co/NmrJ522/answer-3509503-1280.jpg" alt="" />
            </div>
            <div className="join join-vertical w-full lg:w-1/2">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    What is product alternation?
                    </div>
                    <div className="collapse-content">
                        <p>Product alternation refers to the practice of substituting traditional products with more sustainable or eco-friendly alternatives. It involves choosing products that have a lower environmental impact, are ethically sourced, and promote healthier lifestyles.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Why should I consider using alternative products?
                    </div>
                    <div className="collapse-content">
                        <p> Alternative products offer several benefits, including reduced environmental footprint, improved health outcomes, and support for ethical and sustainable practices. By choosing alternatives, you can contribute to positive change and make a difference in the world.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How do you select the products featured on your website?
                    </div>
                    <div className="collapse-content">
                        <p>We carefully research and vet each product to ensure it meets our criteria for sustainability, quality, and ethical sourcing. We prioritize products that are made from natural or renewable materials, produced using eco-friendly processes, and support fair labor practices.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Are your alternative products as effective as traditional ones?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we strive to offer alternative products that are not only environmentally friendly but also perform well and meet consumer expectations. Our products undergo rigorous testing to ensure they deliver the same level of quality and effectiveness as their conventional counterparts.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Are your alternative products affordable?
                    </div>
                    <div className="collapse-content">
                        <p> We understand that cost is an important consideration for consumers. While some alternative products may have a higher upfront cost, they often provide long-term savings through reduced resource consumption, improved durability, and better health outcomes. We strive to offer a range of products at different price points to accommodate various budgets.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Faq;