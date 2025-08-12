import { NavLink, Outlet } from 'react-router';
import { FaBook, FaHome, FaListUl, FaMailBulk, FaUser, FaUsers } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi';
import { FaShop } from 'react-icons/fa6';
import { ImSpoonKnife } from "react-icons/im";

const DashRoot = () => {
    return (
        <div className='flex '>
            <div className='min-h-screen w-[20%] bg-[#d1a054] p-5  space-y-3'>
                <h3>BISTRO BOSS <span>RESTAURANT</span></h3>
                <div className='space-y-1'>
                    <NavLink to='/dash_home' className='btn btn-sm w-full'> <FaHome />Admin Home</NavLink>
                    <NavLink to='/' className='btn btn-sm w-full'> <FaHome />Add Items</NavLink>
                    <NavLink to='' className='btn btn-sm w-full'> <FaListUl />Manage Items</NavLink>
                    <NavLink to='' className='btn btn-sm w-full'> <FaBook />Manage Bookings</NavLink>
                    <NavLink to='' className='btn btn-sm w-full'> <FaUsers />All Users</NavLink>
                </div>
                <hr />
                <NavLink to='/' className='btn btn-sm w-full'> <FaHome />Home</NavLink>
                <NavLink to='/our-menu' className='btn btn-sm w-full'> <FiMenu />Menu</NavLink>
                <NavLink to='/our-shop' className='btn btn-sm w-full'> <FaShop />Shop</NavLink>
                <NavLink to='/contact-us' className='btn btn-sm w-full'> <ImSpoonKnife />Contact</NavLink>

            </div>
            <div className='min-h-screen w-[80%]'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashRoot;