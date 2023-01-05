import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png'
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header className='my-6' >
            <div className="hero h-[550px]" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-2/4 sm:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='mr-6'>
                    <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;