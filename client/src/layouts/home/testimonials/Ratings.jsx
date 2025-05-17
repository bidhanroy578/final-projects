import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Ratings = ({ rating }) => {
    return (
        <Rating
            style={{ maxWidth: 250 }}
            value={rating}
            readOnly
            className='text-[#cd9003] mb-14'
        />
    );
};

export default Ratings;