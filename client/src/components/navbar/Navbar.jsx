import { NavLink } from "react-router";
import "./navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../context_api/Auth_context";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const { cart } = useCart()

    const handleSignout = () => {
        logout()
            .then(res => {
                console.log(res)
                Swal.fire({
                    title: "Sign Out successfull !!!",
                    icon: "success"
                });
            }).catch(err => { alert(err.message) })
    }

    const navItems = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/contact-us'>CONTACT US</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink to='/our-menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/our-shop'>OUR SHOP</NavLink></li>
    </>
    return (
        <div className="navbar z-50 absolute bg-black/40 text-white font-extrabold text-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black/60 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className=" font-black text-3xl">BISTRO BOSS <p className=" font-bold text-xl tracking-[8px]">RESTAURANT</p></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className="indicator">
                    <span className="indicator-item text-[12px] bg-red-600 text-black rounded-full p-[2px]">
                        {cart.length}
                    </span>
                    <button className="btn bg-transparent indicator rounded-full"><FaShoppingCart className="text-2xl" /></button>
                </div>
                <div>
                    {
                        user ?
                            <button onClick={handleSignout} className="border border-amber-200 p-2 rounded-full hover:scale-95 active:scale-100 transition-transform">Sign Out</button>
                            :
                            <a href="/signin" className="border border-amber-200 p-2 rounded-full hover:scale-95 active:scale-100 transition-transform">Sign In</a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;