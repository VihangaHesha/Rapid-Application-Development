import {Link} from "react-router-dom";
import logo from '../../../assets/Logos/wood-shop-logo.jpg';
import {useEffect, useState} from "react";

export function Navbar() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");

        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    return (
        <div
            className="font-sans flex justify-between items-center py-7 px-5 mt-2.5 mx-2.5 bg-neutral-800 shadow-lg backdrop-blur-lg h-10 text-white w-[calc(100%-25px)] rounded-2xl">
            <div className="navbar_logo">
                <Link to="/">
                    <img className="w-9 h-9" src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="navigation flex items-center justify-center gap-5">
                <ul className="flex items-center justify-center gap-5 list-none">
                    {role === 'User' && (
                        <>
                            <li>
                                <Link
                                    to="/"
                                    className="text-white no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-white no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-white no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    CONTACT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cart"
                                    className="text-white no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    CART
                                </Link>
                            </li>
                        </>
                    )}

                    {role === 'Admin' && (
                        <>
                            <li>
                                <Link
                                    to="/admin-panel"
                                    className="text-white no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    ADMIN PANEL
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/manage-products"
                                    className="text-white no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    MANAGE PRODUCTS
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

                {username ? (
                    <p className="text-white text-lg px-4">{username}</p>
                ) : (
                    <button
                        className="cursor-pointer bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-lg !py-2 !px-4 transition-all duration-400 hover:bg-[#D4AF37] hover:text-[#101010]"
                        type="button"
                        onClick={() => (window.location.href = '/login')}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
}
