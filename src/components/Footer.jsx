import React from "react";
import logo from "../images/cs-logo.png"

const Footer = () => {
    return (
        <footer className="bg-[#007bff] text-white pt-[60px] font-sans relative">

            {/* Top Grid */}
            <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 items-start 
      max-[992px]:grid-cols-2 max-[600px]:grid-cols-1">

                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-10 max-[992px]:col-span-2 max-[600px]:items-center">
                    <div>
                        <img
                            src={logo}
                            alt="Coder Street Institute Logo"
                            className="w-20 mb-3"
                        />
                        <p className="italic text-lg opacity-90">
                            “Code Your Way To Success“
                        </p>
                    </div>

                    {/* CALL US */}
                    <div className="flex items-center gap-4 text-base max-[600px]:justify-center">
                        <span className="text-3xl">📞</span>
                        <div>
                            <span className="block text-base opacity-90 mb-1">
                                Call us free
                            </span>
                            <p className="text-2xl font-bold m-0">+91 7777003080</p>
                        </div>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div>
                    <h3 className="text-[20px] font-semibold mb-5">Company Details</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">About Us</a></li>
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">Latest News</a></li>
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">Term Conditions</a></li>
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">Our Courses</a></li>
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">Our Team</a></li>
                    </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                    <h3 className="text-[20px] font-semibold mb-5">Informations</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">Tutorials</a></li>
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">Documentation</a></li>
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">Privacy Policy</a></li>
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">FAQs</a></li>
                        <li><a href="#" className="text-white text-[16px] hover:opacity-70">Support</a></li>
                    </ul>
                </div>

                {/* SOCIAL COLUMN */}
                <div>

                    <div className="flex flex-col">
                        <h3 className="text-[20px] font-semibold mb-5 text-white">
                            Our Social Access
                        </h3>

                        <div className="flex items-center gap-3">

                            {[1, 2, 3, 4].map((i) => (
                                <a
                                    key={i}
                                    href="https://wa.me/917777003080"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-pointer hover:scale-110 transition-transform"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="#ffffff"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.884 3.488" />
                                    </svg>
                                </a>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="max-w-[1200px] mx-auto mt-16 px-5 py-5 border-t border-white/20 
      flex justify-between items-center text-sm max-[600px]:flex-col max-[600px]:gap-4 text-center">

                <p>© 2025 Coder Street Institute</p>

                <div className="bottom-links mt-2">
                    <a href="#" className="ml-6 hover:underline">Privacy Policy</a>
                    <a href="#" className="ml-6 hover:underline">Terms & Conditions</a>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
