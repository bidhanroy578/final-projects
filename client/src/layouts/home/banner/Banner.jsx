import React from 'react';
import bg1 from '../../../assets/home/chef-service.jpg'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bg1})` }} className='min-h-[500px] bg-cover bg-center p-10 flex justify-center items-center' >
            <div className='bg-white text-black text-center  p-20 space-y-6'>
                <h3 className='text-5xl'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Banner;