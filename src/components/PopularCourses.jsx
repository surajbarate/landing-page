import React from "react";
import courseImage from "../images/course2.png";

const PopularCourses = () => {
    return (
        <section className="bg-[#0c7ce0] py-20 text-white font-poppins">
            <div className="w-11/12 md:w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left Image */}
                <div className="popular-image flex-shrink-0">
                    <img
                        src={courseImage}
                        alt="Student"
                        className="w-full max-w-[420px] rounded-lg"
                    />
                </div>

                {/* Right Content */}
                <div className="popular-content max-w-lg text-center lg:text-left">
                    <p className="text-[#ffd23c] text-sm mb-2">About These Courses</p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
                        Popular Courses Among <br />
                        Students
                    </h2>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 sm:gap-12 mt-4">
                        <div className="stat-box">
                            <h3 className="text-[#ff7b3a] text-2xl sm:text-3xl font-bold mb-1">1,300+</h3>
                            <p className="text-sm opacity-90">People Views</p>
                        </div>

                        <div className="stat-box">
                            <h3 className="text-[#ffd23c] text-2xl sm:text-3xl font-bold mb-1">20+</h3>
                            <p className="text-sm opacity-90">Students</p>
                        </div>

                        <div className="stat-box">
                            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1">8+</h3>
                            <p className="text-sm opacity-90">Courses</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PopularCourses;
