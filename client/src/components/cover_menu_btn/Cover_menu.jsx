import React from 'react';
import Cover from './Cover';
import MenuCategory from '../card_styles/MenuCategory';
import { Link } from 'react-router';

const Cover_menu = ({ img, title, description, menu, index_id }) => {
    return (
        <div className='my-10'>
            <Cover img={img} title={title} description={description} />
            <MenuCategory menu={menu} />
            <div className='text-center'>
                <Link to={`/our-shop/${index_id}`}><button className='rounded-xl btn btn-outline border-0 border-b-2'>ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default Cover_menu;