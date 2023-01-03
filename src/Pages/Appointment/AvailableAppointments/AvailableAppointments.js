import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointmentOptions from './AvailableAppointmentOptions';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(option => <AvailableAppointmentOptions
                        key={option._id}
                        appointmentOption={option}
                    >
                    </AvailableAppointmentOptions>)
                }
            </div>
        </section >
    );
};

export default AvailableAppointments;