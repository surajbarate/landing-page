import { useState } from "react";

const faqs = [
    {
        question: "Who is this course for?",
        answer:
            "This course is ideal for beginners, students, job seekers, and working professionals who want to build real-world full-stack applications."
    },
    {
        question: "How long will I have access to the course?",
        answer:
            "You get lifetime access to all course content, updates, and resources."
    },
    {
        question: "What if I have questions during the course?",
        answer:
            "You can ask your trainer directly or use the doubt-support channel for quick help."
    },
    {
        question: "Requirements",
        answer:
            "Basic computer knowledge and willingness to learn. Prior coding experience is not mandatory."
    },
    {
        question: "Features",
        answer:
            "Hands-on projects, interview preparation, certification, and lifetime support."
    },
    {
        question: "Target audiences",
        answer:
            "Students, freshers, IT professionals, freelancers, entrepreneurs."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg shadow-sm border"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 text-left"
                        >
                            <span className="font-semibold text-gray-900">
                                {faq.question}
                            </span>

                            <span className="text-2xl text-gray-500">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className="px-4 pb-4 text-gray-700">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
