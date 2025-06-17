import React from 'react';
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useMyBookedTutorials from '../../apis/useMyBookedTutorials';
import useAuth from '../../hokes/useAuth';
import { FaRegHeart } from 'react-icons/fa';

const MyBookedTutorialsRow = ({ tutorial, index }) => {
    const { user } = useAuth();
    const { myBookedTutorialsDelete } = useMyBookedTutorials();

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
                myBookedTutorialsDelete(user?.email, tutorial._id)
                    .then(res => {
                        if (res.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Booking Successfully deleted.",
                                icon: "success"
                            });
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
                        <div className="font-bold  ">{tutorial?.tutor_name}</div>
                    </div>
                </div>
            </td>
            <td className='font-semibold'>
                {tutorial?.tutorial_language}
            </td>
            <td>Purple</td>
            <th className='flex items-center flex-wrap justify-center'>
                <Link
                    to={`/tutorDetails/${tutorial?.tutorial_id}`}
                    className='shadow-2xl text-shadow-2xs p-2 rounded-lg hover:bg-gray-200 text-orange-600'>
                    <FaRegHeart size={20} />
                </Link>
                <button
                    onClick={handleTutorialDelete}
                    className=" text-red-500 hover:bg-base-200 cursor-pointer p-0.5">
                    <MdDelete size={20} />
                </button>
                <Link
                    to={`/tutorDetails/${tutorial?.tutorial_id}`}
                    className="btn btn-ghost btn-xs">
                    details
                </Link>
            </th>
        </tr>
    );
};

export default MyBookedTutorialsRow;