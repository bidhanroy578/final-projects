import TitleAndDes from '../../../components/title/TitleAndDes';
import MenuCategory from '../../../components/card_styles/MenuCategory';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router';
// import menu from '../../../assets/menu.json';
const Menu = () => {
    // load menu data from api if there is any
    const [menu] = useMenu()
    const list = menu.filter(item => item.category === 'popular')
    return (
        <div>
            <TitleAndDes title={"FROM OUR MENU"} description={'Check it out'} />
            <MenuCategory menu={list} />
            <div className='text-center'>
                <Link to='/our-menu'>
                    <button className='hover:bg-gray-500 hover:scale-105 active:scale-95 transition-transform py-3 px-6 my-5 uppercase rounded border-b-2 border-b-black'>View full Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default Menu;