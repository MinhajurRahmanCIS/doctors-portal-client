import React from 'react';
import bg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <div className='flex justify-center items-center h-[604px]' style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className='p-7'>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <input type="email" className="input  w-full max-w-xs" placeholder="Email Address"/>
                    </div>
                    <br />
                    <div className="form-control w-full max-w-xs">
                        <input type="password" className="input  w-full max-w-xs" placeholder="Subject"/>
                    </div>
                    <br />
                    <div className="form-control w-full max-w-xs">
                        <textarea className="textarea" placeholder="Your message"></textarea>
                    </div>
                    <br />
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;