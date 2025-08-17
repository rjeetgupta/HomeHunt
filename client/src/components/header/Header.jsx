import { nav } from "../../utils/data";
import { Link } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react"
import { useState } from "react";
import Logo from "../../assets/logo.png"


function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <div className="flex relative md:rounded-full bg-white justify-between items-center mt-4 max-w-5xl mx-auto px-8 py-2 shadow-main border border-neutral-200">
                <div>
                    <Link to="/">
                        <img src={Logo} alt="logo" className="w-32" />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-5 font-medium">
                    {nav.map((item, index) => (
                        <Link to={item.path} key={index} className="hover:text-[#27ae60] capitalize transition duration-200 ease-linear">{item.text}</Link>
                    ))}
                </div>

                <div className="hidden sm:flex">
                    <button className="mr-4">
                        <span>2</span>
                        <span>My List</span>
                    </button>
                    <button className="bg-[#27AE60] hover:bg-[#12984a] px-5 py-1.5 text-neutral-100 shadow-main rounded-lg cursor-pointer transition duration-500 ease-in-out">Sign In</button>
                </div>

                <div onClick={() => setOpen(!open)} className="md:hidden">
                    <IconMenu2 />
                </div>

                {
                    open && (
                        <div className="absolute inset-x-0 shadow-main top-15 max-w-[80%] bg-teal-400 mx-auto transition duration-700 ease-in-out">
                            <div className="flex md:hidden flex-col items-start gap-4 text-sm p-4 rounded-md">
                                {nav.map((item, index) => (
                                    <Link to={item.path} key={index} className="hover:text-[#27ae60] capitalize">{item.text}</Link>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header