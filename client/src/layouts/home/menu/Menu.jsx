import { useEffect, useState } from 'react';
import TitleAndDes from '../../../components/title/TitleAndDes';
import ListItems from '../../../components/card_styles/ListItems';
// import menu from '../../../assets/menu.json';
const Menu = () => {
    // load menu data from api if there is any
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const menuData = data.filter(menu => menu.category === 'popular');
                setMenu(menuData);
            })
    }, [])
    return (
        <div>
            <TitleAndDes title={"FROM OUR MENU"} description={'Check it out'} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    menu.map((item, index) =>
                        <ListItems key={index} item={item} />
                    )
                }
            </div>
            <button className='hover:bg-gray-500 hover:scale-105 active:scale-95 transition-transform py-3 px-6  mx-auto my-5 uppercase rounded border-b-2 border-b-black'>View full Menu</button>
        </div>
    );
};

export default Menu;