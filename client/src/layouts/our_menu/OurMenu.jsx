import Cover from '../../components/cover_menu_btn/Cover';
import TitleAndDes from '../../components/title/TitleAndDes';
import MenuCategory from '../../components/card_styles/MenuCategory';
import useMenu from '../../hooks/useMenu';
import Cover_menu from '../../components/cover_menu_btn/Cover_menu';

import menuCover from '../../assets/menu/banner3.jpg'
import dessertCover from '../../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../../assets/menu/pizza-bg.jpg'
import saladCover from '../../assets/menu/salad-bg.jpg'
import soupCover from '../../assets/menu/soup-bg.jpg'
import { Helmet } from 'react-helmet-async';

const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet title='Bistro Boss | Our Menu' />
            <Cover img={menuCover} title={"our menu"} />
            {/* todays offer  */}
            <TitleAndDes title={"TODAY'S OFFER"} description={"Don't miss"} />
            <MenuCategory menu={offered} />
            {/* desserts  */}
            <Cover_menu img={dessertCover} title={'desserts'} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menu={dessert} index_id={3} />

            {/* pizza  */}
            <Cover_menu img={pizzaCover} title={'pizzas'} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menu={pizza} index_id={1} />

            {/* salad  */}
            <Cover_menu img={saladCover} title={'salads'} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menu={salad} index_id={0} />

            {/* soup  */}
            <Cover_menu img={soupCover} title={'soups'} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menu={soup} index_id={2} />
        </div>
    );
};

export default OurMenu;