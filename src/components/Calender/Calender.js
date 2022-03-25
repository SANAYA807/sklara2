import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalenderCard = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value} className='mb-3 ml-0' next2Label={null} prev2Label={null} />
        </div>
    );
}
export default CalenderCard