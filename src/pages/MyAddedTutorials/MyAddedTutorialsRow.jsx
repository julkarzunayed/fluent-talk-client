import React from 'react';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from "react-icons/bi";
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hokes/useAuth';
import useMyAddedTutorials from '../../apis/useMyAddedTutorials';

const MyAddedTutorialsRow = ({ tutorial, index }) => {
    const { user } = useAuth();
    const { myAddedTutorialDelete } = useMyAddedTutorials();
    const navigate = useNavigate()

    const handleTutorialDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Delete Booking!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete!"
        }).then((result) => {
            if (result.isConfirmed) {
                myAddedTutorialDelete(user?.email, tutorial._id)
                    .then(res => {
                        if (res.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Booking Successfully deleted.",
                                icon: "success"
                            });
                            navigate('/addTutorials')
                        }
                    })
                    .catch(err => console.log(err))



            }
        });
    }
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold  ">{tutorial?.tutorName}</div>
                    </div>
                </div>
            </td>
            <td className='font-semibold'>
                {tutorial?.language}
            </td>
            <td>
                {tutorial?.price} $
            </td>
            <th className='flex items-center flex-wrap justify-center'>
                {/* Edit Button */}
                <button
                    onClick={``}
                    className=" text-green-500 hover:bg-base-300 cursor-pointer p-0.5">
                    <BiEdit size={20} />
                </button>
                {/* Delete button */}
                <button
                    onClick={handleTutorialDelete}
                    className=" text-red-500 hover:bg-base-300 cursor-pointer p-0.5">
                    <MdDelete size={20} />
                </button>
                {/* Details button */}
                <Link
                    to={`/tutorDetails/${tutorial?._id}`}
                    className="btn btn-ghost btn-xs">
                    details
                </Link>
            </th>
        </tr>
    );
};

export default MyAddedTutorialsRow;