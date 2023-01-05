import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero h-[750px]" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt='chair' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;