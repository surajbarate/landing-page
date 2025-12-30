import React from "react";

const Categorie = () => {
    return (
        <section className="py-16 px-6 bg-white" id="categories">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12">
                Top <span className="text-[#2563eb]">Categories</span>
            </h2>

            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 items-center">
                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
                    <div className="category-box bg-[#f3f4f8] h-24 sm:h-28 rounded-xl flex items-center gap-4 px-6 border border-gray-200 hover:bg-[#2563eb] hover:text-white transition cursor-pointer">
                        <div className="category-icon w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-2xl">
                            ⏳
                        </div>
                        <p className="font-semibold text-base sm:text-lg">Marketing</p>
                    </div>

                    <div className="category-box bg-[#f3f4f8] h-24 sm:h-28 rounded-xl flex items-center gap-4 px-6 border border-gray-200 hover:bg-[#2563eb] hover:text-white transition cursor-pointer">
                        <div className="category-icon w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-2xl">
                            💡
                        </div>
                        <p className="font-semibold text-base sm:text-lg">Programming</p>
                    </div>

                    <div className="category-box bg-[#f3f4f8] h-24 sm:h-28 rounded-xl flex items-center gap-4 px-6 border border-gray-200 hover:bg-[#2563eb] hover:text-white transition cursor-pointer">
                        <div className="category-icon w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-2xl">
                            ⚗️
                        </div>
                        <p className="font-semibold text-base sm:text-lg">Accounting</p>
                    </div>

                    <div className="category-box bg-[#f3f4f8] h-24 sm:h-28 rounded-xl flex items-center gap-4 px-6 border border-gray-200 hover:bg-[#2563eb] hover:text-white transition cursor-pointer">
                        <div className="category-icon w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-2xl">
                            📚
                        </div>
                        <p className="font-semibold text-base sm:text-lg">Business Analyst</p>
                    </div>

                    <div className="category-box bg-[#f3f4f8] h-24 sm:h-28 rounded-xl flex items-center gap-4 px-6 border border-gray-200 hover:bg-[#2563eb] hover:text-white transition cursor-pointer">
                        <div className="category-icon w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-2xl">
                            🐞
                        </div>
                        <p className="font-semibold text-base sm:text-lg">Development</p>
                    </div>

                    <div className="category-box bg-[#f3f4f8] h-24 sm:h-28 rounded-xl flex items-center gap-4 px-6 border border-gray-200 hover:bg-[#2563eb] hover:text-white transition cursor-pointer">
                        <div className="category-icon w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-2xl">
                            ✉️
                        </div>
                        <p className="font-semibold text-base sm:text-lg">Email Marketing</p>
                    </div>
                </div>

                {/* More Courses Card */}
                <div className="more-courses w-full max-w-sm lg:w-80 h-56 lg:h-64 bg-[#1e1b4b] rounded-2xl text-white flex flex-col items-center justify-center text-center px-8">
                    <div className="more-icon text-5xl mb-4">🧑‍🏫</div>
                    <p className="text-2xl font-bold">5 More Courses</p>
                    <p className="mt-3 opacity-90">Get Started →</p>
                </div>
            </div>
        </section>
    );
};

export default Categorie;