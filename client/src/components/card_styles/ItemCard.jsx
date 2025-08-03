import usePagination from "../../hooks/usePaginatio ";
import Pagination from "../pagination/Pagination";

const ItemCard = ({ items = [] }) => {
    const { setCurrentPage, setPerPage, perPage, showList } = usePagination(items)
    return (<>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
            {
                showList.map(item => (
                    <div key={item._id} className='relative max-w-[430px] mx-auto shadow-[#BB8506] shadow-2xl'>
                        <img loading="lazy" src={item.image} className=' object-cover w-full' alt={item.name} />
                        <p className='bg-black text-white px-4 py-2 absolute right-4 top-4'>${item.price}</p>
                        <div className=" space-y-5 text-center p-4">
                            <h2 className='text-xl'>{item.name}</h2>
                            <p className="text-start">{item.recipe}</p>
                            <button className="btn btn-soft text-[#BB8506] border-b-[#BB8506] border-b-2">ADD TO CART</button>
                        </div>
                    </div>
                ))
            }
        </div>
        <Pagination perPage={perPage} totalItem={items.length} setPerPage={setPerPage} setCurrentPage={setCurrentPage} ></Pagination>
    </>
    );
};

export default ItemCard;