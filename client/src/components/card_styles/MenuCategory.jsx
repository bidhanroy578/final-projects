const MenuCategory = ({ menu = [] }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
            {
                menu.map((item, index) =>
                    <div key={index} className='flex items-center gap-3'>
                        <img src={item.image} className='h-[100px] w-[120px] rounded-r-full rounded-b-full' />
                        <div>
                            <h2 className='flex justify-between text-xl'>{item.name} ------------------ <span className='text-red-500'>${item.price}</span></h2>
                            <p>{item.recipe}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
export default MenuCategory;