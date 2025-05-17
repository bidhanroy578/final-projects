import React from 'react';
import Cover from './Cover';
import MenuCategory from '../card_styles/MenuCategory';

const Cover_menu = ({ img, title, description, menu }) => {
    return (
        <div className='my-10'>
            <Cover img={img} title={title} description={description} />
            <MenuCategory menu={menu} />
            <button className='rounded-xl btn btn-outline border-0 border-b-2'>ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default Cover_menu;