import React from "react";

const SubscriptionBanner = () => {
    return (
        <section className="relative max-w-7xl mx-auto mt-16 mb-16 px-4">
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#007bff] to-[#0056b3] shadow-2xl px-10 py-12 md:px-16 md:py-16">

                {/* Floating Images */}
                <img
                    src="https://www.shutterstock.com/image-vector/3d-floating-books-opened-book-260nw-2661673149.jpg"
                    alt="Book"
                    className="illustration absolute top-6 left-10 w-[100px] animate-float"
                />
                <img
                    src="https://static.vecteezy.com/system/resources/previews/062/692/730/non_2x/cute-school-supplies-cartoon-backpack-and-pen-vector.jpg"
                    alt="Backpack"
                    className="illustration absolute bottom-8 left-12 w-[140px] animate-float animation-delay-1000"
                />
                <img
                    src="https://as2.ftcdn.net/jpg/01/39/63/83/1000_F_139638308_JBkS6WMZ5zCaXXhWi7V3CMXRKkPJOnwY.jpg"
                    alt="Paper Plane"
                    className="illustration absolute top-20 left-60 w-[70px] animate-fly"
                />
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/013/186/607/small/set-of-purple-rulers-ruler-triangle-ruler-protractor-for-school-and-business-illustration-isolated-on-white-background-vector.jpg"
                    alt="Triangle"
                    className="illustration absolute top-8 right-24 w-[90px] animate-float animation-delay-2000"
                />
                <img
                    src="https://www.shutterstock.com/image-vector/isolated-ruler-triangle-doodle-style-260nw-2492779509.jpg"
                    alt="Ruler"
                    className="illustration absolute bottom-10 right-20 w-[130px] animate-float animation-delay-3000"
                />

                {/* Center Content */}
                <div className="text-center text-white relative z-[2]">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        A subscription that’s <br /> more than just classes
                    </h2>

                    <button className="bg-white text-[#007bff] text-lg font-semibold px-10 py-3 rounded-full shadow-xl transition-all hover:-translate-y-1">
                        Get Subscription
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionBanner;
