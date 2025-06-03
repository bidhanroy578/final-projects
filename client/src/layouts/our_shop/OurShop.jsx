import { useParams } from 'react-router';
import ourShopBanner from '../../assets/shop/banner2.jpg';
import Cover from '../../components/cover_menu_btn/Cover';
import TabSection from './tab/TabsSection';

const OurShop = () => {
    const id = useParams()?.id
    return (
        <div>
            <Cover img={ourShopBanner} title={"our shop"} />
            <TabSection id={id} />
        </div>
    );
};

export default OurShop;