import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        form.reset();
        console.log(name, email, phone, date, slot);

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }
        console.log(booking);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 mt-10 '>
                        <input type="text" value={date} disabled className="input w-full input-bordered" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="name" name='name' placeholder="Full Name" className="input w-full input-bordered" required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input type="email" name='email' placeholder="Email" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;