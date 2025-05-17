import { NavLink } from "react-router";
import "./navbar.css"
const Navbar = () => {
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
                <div>cart </div>
                <div>sign out </div>
            </div>
        </div>
    );
};

export default Navbar;