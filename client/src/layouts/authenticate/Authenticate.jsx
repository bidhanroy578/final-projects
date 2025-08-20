import img01 from './../../assets/others/authentication.png'
import img03 from './../../assets/others/authentication2.png'
import { Outlet } from 'react-router';


const Authenticate = () => {
    return (
        <div className='min-h-screen w-screen bg-cover text-black dark:text-white bg-center' style={{ background: `url(${img01})` }}>
            <div className=' min-h-screen w-screen dark:backdrop-invert p-20'>
                <div className='shadow-2xl dark:shadow-slate-200 rounded-xl' style={{ background: `url(${img01})` }}>
                    <div className='grid w-full grid-cols-2 gap-4 items-center dark:backdrop-invert p-10'>
                        <img src={img03} className='' />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authenticate;