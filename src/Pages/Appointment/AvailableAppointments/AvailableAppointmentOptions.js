import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AvailableAppointmentOptions = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl items-center justify-center text-center">
            <div className="card-body">
                <h2 className="text-secondary text-2xl font-bold">{name}</h2>
                <p className='font-semibold'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p><span className='font-bold'>{slots.length}</span> {slots.length > 1 ? 'Spaces Available' : 'Space Available'} </p>
                <div >
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointmentOptions;