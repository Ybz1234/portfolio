import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

export default function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="BackEnd">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Back-End</li>
                </Link>
                <Link spy={true} smooth={true} to="Databases">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Databases</li>
                </Link>
                <Link spy={true} smooth={true} to="FrontEnd">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Front-End</li>
                </Link>
                <Link spy={true} smooth={true} to="MoreLanguages">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">More Languages</li>
                </Link>
                <Link spy={true} smooth={true} to="Environments">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Environments</li>
                </Link>
            </ul>
        </div>
    </>

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold"><img src="..\public\newLogo.png" alt="" srcset="" width={35} height={35}/></span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="BackEnd">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Back-End</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Databases">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Databases</li>
                            </Link>
                            <Link spy={true} smooth={true} to="FrontEnd">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Front-End</li>
                            </Link>
                            <Link spy={true} smooth={true} to="MoreLanguages">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">More Languages</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Environments">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Environments</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    )
}
