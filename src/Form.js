import React, { useState } from 'react';

const Counter = ({ label, count, setCount }) => (
  <div>
    <label>{label}</label>
    <button type="button" onClick={() => setCount(count + 1)}>+</button>
    <span>{count}</span>
    <button type="button" onClick={() => setCount(count - 1)}>-</button>
  </div>
);

const Form = () => {
  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [passengerCount, setPassengerCount] = useState(0);
  const [luggageCount, setLuggageCount] = useState(0);

  return (
    <form>
      <label>
        Service Type
        <select value={serviceType} onChange={e => setServiceType(e.target.value)}>
          <option value="airport">Airport</option>
        </select>
      </label>
      <label>
        Pick Up Date
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label>
        Pick Up Time
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      </label>
      <label>
        Pick Up Location
        <input type="text" value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} />
      </label>
      <label>
        Drop Off Location
        <input type="text" value={dropoffLocation} onChange={e => setDropoffLocation(e.target.value)} />
      </label>
      <Counter label="Number of Passengers" count={passengerCount} setCount={setPassengerCount} />
      <Counter label="Number of Luggage" count={luggageCount} setCount={setLuggageCount} />
    </form>
  );
};

export default Form;
