import { useEffect, useState } from 'react';
import TitleAndDes from '../../../components/title/TitleAndDes';
import Swipe from './Swipe';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-restaurant-one.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    if (reviews.length === 0) {
        return <div className='flex justify-center items-center h-[30vh]'>
            <h1 className='text-3xl font-bold'>Loading...</h1>
        </div>
    }
    return (
        <div className='my-20'>
            <TitleAndDes title={'TESTIMONIALS'} description={'What Our Clients Say'} />
            <Swipe reviews={reviews} />
        </div>
    );
};

export default Testimonials;