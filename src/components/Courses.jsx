import React from "react";
import { Link } from "react-router-dom";
import course from "../images/course.jpg";

const Courses = () => {
    const courseList = [
        { title: "Full Stack Web Development", subtitle: "(Laravel / JavaScript / PHP)" },
        { title: "Python Programming" },
        { title: "Web Designing" },
        { title: "UI/UX Designing" },
        { title: "Data Science" },
        { title: "Java Development" },
        { title: "Digital Marketing" },
    ];

    return (
        <section className="courses py-16 bg-gray-50" id="courses">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Popular <span className="text-blue-600">Courses</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {courseList.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                            <img src={course} className="w-full h-[210px] object-cover" />

                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                {item.subtitle && (
                                    <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>
                                )}

                                <Link
                                    to={`/course/${idx}`}
                                    className="block w-4/5 mx-auto text-center bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition font-medium"
                                >
                                    View More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
