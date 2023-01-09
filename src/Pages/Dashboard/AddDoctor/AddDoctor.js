import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['Specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctors = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = (`https://api.imgbb.com/1/upload?key=${imgHostKey}`)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        authorization: `bearer ${localStorage.getItem('accessToken')}`,
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully!`);
                            navigate('/dashboard/manageDoctors')

                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96'>
            <form onSubmit={handleSubmit(handleAddDoctors)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span> </label>
                    <input {...register("name", { required: "Name is required" })} type="name" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span> </label>
                    <input {...register("email", { required: 'Email is required' })} type="email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span> </label>
                    <select
                        {...register("specialty")} className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span> </label>
                    <input {...register("image", { required: "Name is required" })} type="file" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <br />
                <input className='btn btn-accent w-full' value="Add Doctor" type="submit" />
                {/* {
                    signUpError && <p className='text-red-500'>{signUpError}</p>
                } */}
            </form>
        </div>
    );
};

export default AddDoctor;