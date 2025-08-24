import { NavLink, Outlet } from 'react-router';
import { FaBook, FaCalendarAlt, FaHome, FaListUl, FaStar, FaUsers, FaWallet } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi';
import { FaCalendarDay, FaCartFlatbed, FaShop } from 'react-icons/fa6';
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from '../../hooks/useAdmin';

const DashRoot = () => {

    // to do: request with role specified as 'user' or 'admin'
    const [isAdmin, isLoading] = useAdmin()
    // const isAdmin = true
    if (isLoading) return <div>loading isAdmin</div>

    const admin_sidebar = <>
        <NavLink to='/dash_home' className='btn btn-sm w-full'> <FaHome />Admin Home</NavLink>
        <NavLink to='/dashboard/admin/add-items' className='btn btn-sm w-full'> <ImSpoonKnife />Add Items</NavLink>
        <NavLink to='/dashboard/admin/manage-items' className='btn btn-sm w-full'> <FaListUl />Manage Items</NavLink>
        <NavLink to='#' className='btn btn-sm w-full'> <FaBook />Manage Bookings</NavLink>
        <NavLink to='/dashboard/admin/users' className='btn btn-sm w-full'> <FaUsers />All Users</NavLink>
    </>
    const user_sidebar = <>
        <NavLink to='/dash_home' className='btn btn-sm w-full'> <FaHome />User Home</NavLink>
        <NavLink to='#' className='btn btn-sm w-full'> <FaCalendarAlt />Reservation</NavLink>
        <NavLink to='#' className='btn btn-sm w-full'> <FaWallet />Payment History</NavLink>
        <NavLink to='/dashboard/user/my_cart' className='btn btn-sm w-full'> <FaCartFlatbed />My Cart</NavLink>
        <NavLink to='#' className='btn btn-sm w-full'> <FaStar />Add Review</NavLink>
        <NavLink to='#' className='btn btn-sm w-full'> <FaCalendarDay />My Booking</NavLink>
    </>

    return (
        <div className='flex '>
            <div className='min-h-screen md:w-[20%] bg-[#d1a054] p-5  space-y-3'>
                <h3>BISTRO BOSS <span>RESTAURANT</span></h3>
                <div className='space-y-1'>
                    {isAdmin ? admin_sidebar : user_sidebar}
                </div>
                <hr />
                <NavLink to='/' className='btn btn-sm w-full'> <FaHome />Home</NavLink>
                <NavLink to='/our-menu' className='btn btn-sm w-full'> <FiMenu />Menu</NavLink>
                <NavLink to='/our-shop' className='btn btn-sm w-full'> <FaShop />Shop</NavLink>
                <NavLink to='/contact-us' className='btn btn-sm w-full'> <ImSpoonKnife />Contact</NavLink>

            </div>
            <div className='min-h-screen w-[80%] bg-[#f6f6f6] dark:bg-[#3f3f3f]'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashRoot;