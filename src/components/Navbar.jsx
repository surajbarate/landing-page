import { useEffect, useState } from "react";
import logo from "../images/cs-logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-[1000]
                bg-white shadow-md
                flex items-center justify-between
                transition-all duration-300
                ${scrolled ? "py-2 px-10 bg-white/95 backdrop-blur" : "py-4 px-10"}
            `}
        >
            <div className="logo">
                <img src={logo} alt="Logo" className="h-[65px]" />
            </div>

            {/* Menu - becomes horizontally scrollable on mobile */}
            <div className="flex gap-14 font-medium overflow-x-auto whitespace-nowrap scrollbar-hide md:overflow-visible">
                <a href="#home" className="hover:text-blue-600 flex-shrink-0">Home</a>
                <a href="#categories" className="hover:text-blue-600 flex-shrink-0">Categories</a>
                <a href="#courses" className="hover:text-blue-600 flex-shrink-0">Courses</a>
                <a href="#review" className="hover:text-blue-600 flex-shrink-0">Review</a>
                <a href="#blogs" className="hover:text-blue-600 flex-shrink-0">Blogs</a>
            </div>

            <div className="text-[22px] cursor-pointer flex-shrink-0">🔍</div>
        </nav>
    );
};

export default Navbar;