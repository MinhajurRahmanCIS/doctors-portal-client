import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handelLogin = data =>{
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="email" className="input input-bordered w-full max-w-xs" {...register("email")} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")} />
                        <label className="label"><span className="label-text">Forget Password</span> </label>
                    </div>
                    <input className='btn btn-accent w-full' value="login" type="submit" />
                </form>
                <p className='text-center text-sm mt-2'>New to Doctors Portal?<Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-accent w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;