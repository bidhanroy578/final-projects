import TitleAndDes from '../../../../components/title/TitleAndDes';
import useMenu from '../../../../hooks/useMenu';
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ManageItems = () => {

    const axiosSecure = useAxiosSecure()
    const [menu, loading, refetch] = useMenu()
    if (loading) return <h1>Loading...</h1>

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete Item!!!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    axiosSecure.delete(`/menu/${id}`)
                        .then(res => {
                            refetch()
                            console.log(res);
                            Swal.fire({
                                icon: "success",
                                title: "Success!!!",
                                text: "Item Deleted Successfully",
                                confirmButtonColor: '#d1a054'
                            });
                        }).catch(error => {
                            console.error("Error deleting item:", error);
                            Swal.fire({
                                icon: "error",
                                title: "Failed!!!",
                                text: error.message,
                                confirmButtonColor: '#d1a054'
                            });
                        });
                }
            })
    }
    const handleEdit = (id) => {
        console.log(id);
    }

    return (
        <div className='px-16'>
            <TitleAndDes title='MANAGE ALL ITEMS' description='Hurry Up!!!' />
            <h3>Total Items: {menu.length}</h3>
            <table className="table overflow-x-auto">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        menu.map((item, index) =>
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
                                    <Link to={`/dashboard/admin/update-item/${item._id}`} onClick={() => handleEdit(item._id)} className="btn bg-[#d1a054] text-xl " aria-label={`Delete ${item.name}`}><RiEditBoxLine /></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-error text-xl " aria-label={`Delete ${item.name}`}><RiDeleteBinLine /></button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;