import React, { useState } from "react";
import heroImg from "../images/course.jpg";
import FAQSection from "../components/Faqsection";

const ViewCourse = () => {

    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="bg-white pt-24">

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500">
                <span>Home</span> &nbsp; &gt; &nbsp;
                <span>Course</span> &nbsp; &gt; &nbsp;
                <span className="text-gray-800 font-medium">
                    Full Stack Web Development (Laravel / JavaScipt / PHP)
                </span>
            </div>

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left */}
                <div className="lg:col-span-2 pt-10 flex flex-col justify-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">
                        Full Stack Web Development (Laravel / JavaScipt / PHP)
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 w-4/5">
                        “Learn frontend, backend & database development with real-world projects.
                        Become a job-ready full stack developer in just a few months.”
                    </p>
                </div>

                {/* Right Card */}
                <div>
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden">

                        <img
                            src={heroImg}
                            alt="Course"
                            className="w-full h-60 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-6">Course Includes</h3>

                            <div className="space-y-4">

                                <div className="flex justify-between border-b pb-3">
                                    <p className="text-gray-500">Duration :</p>
                                    <p className="font-medium">24 weeks</p>
                                </div>

                                <div className="flex justify-between border-b pb-3">
                                    <p className="text-gray-500">Skill Level :</p>
                                    <p className="font-medium">All levels</p>
                                </div>

                                <div className="flex justify-between border-b pb-3">
                                    <p className="text-gray-500">Category :</p>
                                    <p className="font-medium">Development</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="text-gray-500">Language :</p>
                                    <p className="font-medium">English</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto px-6 mt-12 border-b">
                <ul className="flex gap-10 text-gray-600 font-medium">

                    <li
                        onClick={() => setActiveTab("overview")}
                        className={`pb-3 cursor-pointer ${activeTab === "overview"
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "hover:text-blue-600"
                            }`}
                    >
                        Overview
                    </li>

                    <li
                        onClick={() => setActiveTab("instructor")}
                        className={`pb-3 cursor-pointer ${activeTab === "instructor"
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "hover:text-blue-600"
                            }`}
                    >
                        Instructor
                    </li>

                    <li
                        onClick={() => setActiveTab("faq")}
                        className={`pb-3 cursor-pointer ${activeTab === "faq"
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "hover:text-blue-600"
                            }`}
                    >
                        FAQs
                    </li>
                </ul>
            </div>

            {/* TAB CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* OVERVIEW */}
                {activeTab === "overview" && (
                    <div className="space-y-6 leading-relaxed text-gray-700">

                        <div className="space-y-6 leading-relaxed text-gray-700">

                            <h3 className="text-2xl font-bold text-gray-900">Description</h3>

                            <p>
                                This course is designed to equip you with practical, industry-ready skills through hands-on
                                training, real-world projects, and expert mentorship. Whether you’re a beginner or looking to
                                upskill, this program helps you master the tools and techniques required to grow in today’s
                                tech-driven world.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                What You’ll Gain Learning This Course
                            </h3>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>Complete understanding of core concepts</li>
                                <li>Hands-on training with real-world projects</li>
                                <li>Practical knowledge of tools used in companies</li>
                                <li>Ability to solve industry-level problems</li>
                                <li>Strong foundation + advanced techniques</li>
                                <li>Confidence to face interviews and technical tests</li>
                                <li>Portfolio or project work you can showcase</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Why This Course Is the Right Choice for You
                            </h3>

                            <p>
                                This course trains you to become a professional full-stack developer capable of building
                                end-to-end web applications. You’ll learn frontend, backend, APIs, databases, version
                                control, and deployment — along with real-world projects that mirror actual company work.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Beginner-Friendly + Industry-Level Content
                            </h3>
                            <p>Designed for all skill levels, from students to working professionals.</p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Hands-On, Practical Learning
                            </h3>
                            <p>80% practical training with live projects, assignments, and case studies.</p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Taught by Real Industry Experts
                            </h3>
                            <p>Learn from trainers who work in real tech companies.</p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Job-Focused Curriculum
                            </h3>
                            <p>Covers everything required to apply for internships & job roles.</p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Small Batch Size for Personal Attention
                            </h3>
                            <p>Ensures individual guidance and doubt-solving.</p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Professional Certification
                            </h3>
                            <p>Receive a certificate recognised by companies and startups.</p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Lifetime Support
                            </h3>
                            <p>Career guidance, interview preparation, and continuous learning support.</p>

                            <h3 className="text-xl font-semibold text-gray-900">
                                Affordable Fees with High Value
                            </h3>
                            <p>Premium content at budget-friendly pricing.</p>

                        </div>


                        {/* (KEEP remaining overview content if you want) */}

                    </div>
                )}

                {/* INSTRUCTOR */}
                {activeTab === "instructor" && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Instructor</h2>
                        <p className="text-gray-700">
                            Your trainer is an experienced full-stack developer working in the IT industry.
                        </p>
                    </div>
                )}

                {/* FAQ */}
                {activeTab === "faq" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                        <FAQSection />
                    </div>
                )}

            </div>

        </div>
    );
};

export default ViewCourse;
