import TitleAndDes from '../../../../components/title/TitleAndDes';
import { RiDeleteBinLine } from "react-icons/ri";
import useCart from '../../../../hooks/useCart';
import Pagination from '../../../../components/pagination/Pagination';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import usePagination from '../../../../hooks/usePaginatio ';
import { Link } from 'react-router';

const MyCart = () => {
    //to do : total orders numbers 
    const { cart, refetch } = useCart()
    const axiosSecure = useAxiosSecure()
    // console.log(cart)
    const { setCurrentPage, setPerPage, perPage, showList } = usePagination(cart);
    let totalPrice = cart.reduce((prev, curr) => Number(prev) + Number(curr.price), 0);


    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts`, { data: { id } })
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Item Deleted Successfully !!!",
                                icon: "success",
                            });
                            refetch()
                        }
                    }).catch(err => {
                        // console.log(err.message)
                        Swal.fire({
                            title: "Error Happened !!!",
                            text: err.message,
                            icon: 'error',
                        });
                    })
            }
        })
    }

    return (
        <div className='dark:text-white text-black'>
            <TitleAndDes title={'WANNA ADD MORE?'} description={'cart'} />
            <div className='w-[80%] mx-auto p-10 bg-white dark:bg-[#232323] rounded-xl'>
                <div className='flex justify-between m-5'>
                    <h3>Total Orders: {cart.length}</h3>
                    <h3>Total Price: $ {totalPrice}</h3>
                    {
                        totalPrice ?
                            <Link to='/dashboard/payment'><button className='btn bg-[#d1a054]'>Pay</button></Link>
                            :
                            <button disabled className='btn btn-ghost outline'>Pay</button>

                    }
                </div>

                {/* <div className="overflow-x-auto"> */}
                <table className="table overflow-x-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            showList.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-error text-xl " aria-label={`Delete ${item.name}`}><RiDeleteBinLine /></button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>

                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
                <Pagination perPage={perPage} totalItem={cart.length} setPerPage={setPerPage} setCurrentPage={setCurrentPage} ></Pagination>

                {/* </div> */}

            </div>
        </div>
    );
};

export default MyCart;