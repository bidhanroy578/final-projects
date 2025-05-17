// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Ratings from './Ratings';

export default function Swipe({ reviews }) {
    console.log(reviews);
    return (
        <>
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={1}
                loop={true}
                autoplay={
                    {
                        delay: 5000,
                        disableOnInteraction: false,
                    }
                }
                pagination={{
                    clickable: true,

                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id} className='px-10 md:px-20 pb-10'>
                            <div className='flex flex-col items-center justify-center gap-5'>
                                <Ratings rating={review.rating} />
                                <p className='text-xl'>{review.details}</p>
                                <h3 className='text-[#cd9003] font-medium text-3xl'>{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
