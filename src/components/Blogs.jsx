import React from 'react'
import training from "../images/training.jpg"

const Blogs = () => {
    return (
        <section id="blogs" class="bg-white py-16">
            <div class="max-w-screen-2xl mx-auto px-4">
                <h2 class="text-4xl md:text-5xl font-bold text-[#0d3b66] text-center mb-14">
                    Our Blogs
                </h2>


                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


                    <div class="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <div class="h-72 overflow-hidden">
                            <img src={training} class="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <div class="p-6">
                            <h3 class="text-lg font-semibold text-gray-800 leading-snug mb-4">
                                Why Skill-Based Learning Is the Future of Education
                            </h3>
                            <a href="#" class="text-blue-500 font-medium hover:underline">
                                Read More »
                            </a>
                        </div>
                    </div>


                    <div class="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <div class="h-72 overflow-hidden">
                            <img src={training} class="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <div class="p-6">
                            <h3 class="text-lg font-semibold text-gray-800 leading-snug mb-4">
                                How Practical Training Improves Career Opportunities
                            </h3>
                            <a href="#" class="text-blue-500 font-medium hover:underline">
                                Read More »
                            </a>
                        </div>
                    </div>


                    <div class="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <div class="h-72 overflow-hidden">
                            <img src={training} class="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <div class="p-6">
                            <h3 class="text-lg font-semibold text-gray-800 leading-snug mb-4">
                                Choosing the Right Course for Your Career Goals
                            </h3>
                            <a href="#" class="text-blue-500 font-medium hover:underline">
                                Read More »
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Blogs
