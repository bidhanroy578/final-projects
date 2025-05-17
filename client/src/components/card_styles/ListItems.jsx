const ListItems = ({ item }) => {
    return (
        <div>
            <div className='flex items-center gap-3'>
                <img src={item.image} className='h-[100px] w-[120px] rounded-r-full rounded-b-full' />
                <div>
                    <h2 className='flex justify-between text-xl'>{item.name} ------------------ <span className='text-red-500'>${item.price}</span></h2>
                    <p>{item.recipe}</p>
                </div>
            </div>
        </div>
    );
};
export default ListItems;