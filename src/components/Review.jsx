import React from "react";

const testimonials = [
    {
        avatar: "SA",
        name: "Sachin Agrawal",
        time: "2 weeks ago",
        color: "bg-gray-500",
        stars: 5,
        review:
            "Excellent teaching my son learning python very much improvement i recommend to others too",
    },
    {
        avatar: "S",
        name: "Shital Agrawal",
        time: "1 month ago",
        color: "bg-teal-600",
        stars: 5,
        review: "Fully guidance they explained me the way out...",
    },
    {
        avatar: "A",
        name: "Anamika Suryavanshi",
        time: "1 month ago",
        color: "bg-amber-800",
        stars: 4,
        review: "Practical training, supportive mentors 👍 highly recommended",
    },
    {
        avatar: "A",
        name: "All India TTT Sharma Ji",
        time: "1 month ago",
        color: "bg-teal-700",
        stars: 5,
        review:
            "Best place to learn coding with real industry exposure, the trainers explain every concept with clarity and patience.",
    },
];

const Review = () => {
    return (
        <section className="py-20 bg-white" id="review">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0d3b66] mb-16">
                    Students Testimonials
                </h1>

                <div className="relative">
                    {/* Carousel container */}
                    <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="testimonial flex-shrink-0 w-80 sm:w-96 bg-gray-100 rounded-xl p-6 shadow-md snap-start"
                            >
                                {/* Header */}
                                <div className="flex items-center mb-4">
                                    <div
                                        className={`avatar w-12 h-12 flex items-center justify-center text-white font-bold text-lg rounded-full mr-4 ${t.color}`}
                                    >
                                        {t.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <div className="name font-bold text-gray-800">{t.name}</div>
                                        <div className="time text-gray-500 text-sm">{t.time}</div>
                                    </div>
                                    <div className="google-logo text-blue-500 font-bold text-2xl ml-auto">
                                        G
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    <div className="stars text-yellow-400 text-xl tracking-wider">
                                        {"★".repeat(t.stars) + "☆".repeat(5 - t.stars)}
                                    </div>
                                    <div className="verified text-blue-500 text-lg ml-2">✓</div>
                                </div>

                                {/* Review Text */}
                                <div className="review-text text-gray-700 text-sm leading-relaxed">
                                    {t.review}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
