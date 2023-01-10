import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const handelDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: "DELETE",
            headers:
            {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
            refetch();
            toast.success(`Doctor ${doctor.name} Deleted SuccessFully`)
            }
        })

    }

    const closeModal = () => {
        setDeletingDoctor(null);
    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
            }
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors</h2>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>specialty</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <div className="avatar">
                                            <div className="mask mask-circle w-12 h-12">
                                                <img src={doctor.image} alt="Doctors" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className='text-xl'> {doctor.name}</h2>
                                </td>
                                <td>{doctor.specialty}</td>
                                <th>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn  btn-error btn-sm">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    deletingDoctor && <ConfirmationModal
                        title={`Are you sure you want delete!`}
                        message={`If you delete ${deletingDoctor.name}. It cannot be undone`}
                        successAction={handelDeleteDoctor}
                        successButtonName="Delete"
                        modalData = {deletingDoctor}
                        closeModal={closeModal}
                    > </ConfirmationModal>
                }
            </div>

        </div>
    );
};

export default ManageDoctors;