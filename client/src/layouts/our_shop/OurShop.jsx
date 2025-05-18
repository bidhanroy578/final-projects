import ourShopBanner from '../../assets/shop/banner2.jpg';
import Cover from '../../components/cover_menu_btn/Cover';
import TabSection from './tab/TabsSection';

const OurShop = () => {

    return (
        <div>
            <Cover img={ourShopBanner} title={"our shop"} />
            <TabSection />
        </div>
    );
};

export default OurShop;