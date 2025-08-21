import { useQuery } from '@tanstack/react-query';
import TitleAndDes from '../../../../components/title/TitleAndDes';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleAdminRoleChange = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are making this users role to 'Admin'!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${user._id}`, { role: 'admin' })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Updated!",
                                text: "The users role has been changed to 'Admin'.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleUserDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are deleting this user !!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                console.log(user._id)
            }
        });
    }

    return (
        <div className='dark:text-white text-black'>
            <TitleAndDes title={'MANAGE ALL USERS'} description={'How Many???'} />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ?
                                                <button className='btn'>Admin</button>
                                                :
                                                <button onClick={() => handleAdminRoleChange(user)} className='btn btn-warning text-white text-2xl'><FaUsers /></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleUserDelete(user)} className='btn btn-error text-white text-xl'><FaTrash /></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;