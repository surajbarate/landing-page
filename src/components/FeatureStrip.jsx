import React from "react";

const FeatureStrip = () => {
    return (
        <section className="max-w-[1420px] mx-auto my-12 sm:my-16 px-6">
            <div className="bg-blue-600 rounded-3xl text-white grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center">
                    <div className="icon bg-white/20 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4">
                        👨‍🏫
                    </div>
                    <h3 className="text-xl font-semibold">Top Instructors</h3>
                    <p className="opacity-90 mt-1">From world top universities</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center">
                    <div className="icon bg-white/20 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4">
                        📜
                    </div>
                    <h3 className="text-xl font-semibold">Online Certification</h3>
                    <p className="opacity-90 mt-1">From industry recognized</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center">
                    <div className="icon bg-white/20 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4">
                        💻
                    </div>
                    <h3 className="text-xl font-semibold">Lifetime Access</h3>
                    <p className="opacity-90 mt-1">For first track goals</p>
                </div>
            </div>
        </section>
    );
};

export default FeatureStrip;