import React from 'react';
import bg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <div className='grid gap-5 items-center justify-center p-10 bg-no-repeat bg-center bg-cover' style={{background: `url(${bg})`}}>
            <h2 className='text-2xl font-semibold text-white'>Stay connected with us</h2>
            <input type="text" placeholder="Email Address" className="input w-full \ max-w-xs" />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
            <textarea className="textarea" placeholder="Your message"></textarea>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default ContactUs;