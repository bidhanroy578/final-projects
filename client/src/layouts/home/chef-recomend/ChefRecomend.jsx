import { useEffect, useState } from 'react';
import TitleAndDes from '../../../components/title/TitleAndDes';

const ChefRecomend = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const list = data.filter(item => item.category === 'offered')
                setList(list)
            })
    }, [])
    return (
        <div className='my-20'>
            <TitleAndDes title={'CHEF RECOMMENDS'} description={'Should Try'} />
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    list.map(item =>
                        <div key={item._id} className='text-center space-y-5  rounded-lg overflow-hidden shadow-[#D99904] shadow-xl'>
                            <img src={item.image} className='w-full object-cover' />
                            <h3 className=' font-semibold text-2xl'>{item.name}</h3>
                            <p>{item.recipe}</p>
                            <button className='text-[#D99904] btn btn-outline btn-lg uppercase mb-5'>add to cart</button>
                        </div>
                    )
                }
            </div >
        </div >
    );
};

export default ChefRecomend;