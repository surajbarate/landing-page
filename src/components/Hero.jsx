import React from "react";
import student from "../images/student.jpg";

const Hero = () => {
    return (
        <section id="home" className="bg-[#f3f4f8] py-14 md:py-20">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-0">

                {/* LEFT - Exactly as you had */}
                <div className="hero-left text-center md:text-left">
                    <p className="text-[#2563eb] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                        Start Learning Today
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a2540] leading-snug md:leading-tight">
                        Let’s <span className="text-[#2563eb]">Start Learning</span>
                        <br />
                        Skills to Upgrade
                        <br />
                        Your Life
                    </h1>

                    <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 justify-center md:justify-start">
                        <button className="bg-[#2563eb] text-white py-2 px-6 sm:py-3 sm:px-7 rounded-md text-sm sm:text-[15px]">
                            Start Learning Now
                        </button>

                        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                            <div className="w-10 h-10 sm:w-[45px] sm:h-[45px] bg-[#facc15] text-white flex items-center justify-center rounded-full text-lg sm:text-xl">
                                ▶
                            </div>
                            <p className="text-sm sm:text-base">Play Video</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT - Exactly as you had */}
                <div className="relative flex justify-center mt-10 md:mt-0">
                    <div className="absolute inset-0 m-auto w-4/5 max-w-[300px] sm:max-w-[400px] aspect-square rounded-full bg-[#facc15] shadow-lg z-0"></div>

                    <img
                        src={student}
                        alt="Student"
                        className="relative z-10 w-2/3 max-w-[200px] sm:max-w-[280px] md:max-w-[320px] rounded-full object-cover aspect-square"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;