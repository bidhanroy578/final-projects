import Slider from './carousel/Slider';
import OrderOnlineSection from './order_online_section/OrderOnlineSection';
import Banner from './banner/Banner';
import Menu from './menu/Menu';
import ContactUs from './contact_us/ContactUs';
import ChefRecomend from './chef-recomend/ChefRecomend';
import Testimonials from './testimonials/Testimonials';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Slider />
            <OrderOnlineSection />
            <Banner />
            <Menu />
            <ContactUs />
            <ChefRecomend />
            <Testimonials />
        </div>
    );
};

export default Home;