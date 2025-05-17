import React from 'react';
import TitleAndDes from '../../../components/title/TitleAndDes';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import sld1 from '../../../assets/home/slide1.jpg';
import sld2 from '../../../assets/home/slide2.jpg';
import sld3 from '../../../assets/home/slide3.jpg';
import sld4 from '../../../assets/home/slide4.jpg';
import sld5 from '../../../assets/home/slide5.jpg';

const OrderOnlineSection = () => {
    return (
        <div>
            <TitleAndDes title="Order Online" description="From 11:00am to 10:00pm" />

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='flex flex-col'><img src={sld1} /><p className='text-3xl shadow-2xl text-white -top-14 relative z-50 bg-black/20 w-full py-3'>SALADS</p></SwiperSlide>
                <SwiperSlide className='flex flex-col'><img src={sld2} /><p className='text-3xl shadow-2xl text-white -top-14 relative z-50 bg-black/20 w-full py-3'>PIZZAS</p></SwiperSlide>
                <SwiperSlide className='flex flex-col'><img src={sld3} /><p className='text-3xl shadow-2xl text-white -top-14 relative z-50 bg-black/20 w-full py-3'>SOUPS</p></SwiperSlide>
                <SwiperSlide className='flex flex-col'><img src={sld4} /><p className='text-3xl shadow-2xl text-white -top-14 relative z-50 bg-black/20 w-full py-3'>DESERTS</p></SwiperSlide>
                <SwiperSlide className='flex flex-col'><img src={sld5} /><p className='text-3xl shadow-2xl text-white -top-14 relative z-50 bg-black/20 w-full py-3'>SALADS</p></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderOnlineSection;