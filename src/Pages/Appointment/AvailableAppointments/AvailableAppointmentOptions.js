import React from 'react';

const AvailableAppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, slots, price } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl items-center justify-center text-center">
            <div className="card-body">
                <h2 className="text-secondary text-2xl font-bold">{name}</h2>
                <p className='font-semibold'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p><span className='font-bold'>{slots.length}</span> {slots.length > 1 ? 'Spaces Available' : 'Space Available'} </p>
                <div >
                    <p><span className='font-semibold'>Price: $</span>{price}</p>
                    <label
                    disabled={slots.length === 0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                    onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointmentOptions;