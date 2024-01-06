
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import TextHeader from '../../components/TextHeader';

const Form = () => {
  const location = useLocation();
  const { time, pickupLocation, dropoffLocation, passengerCount, selectedOption } = location.state || {};


  const [timeState, setTime] = useState(time || '');
  const [pickupLocationState, setPickupLocation] = useState(pickupLocation || '');
  const [dropoffLocationState, setDropoffLocation] = useState(dropoffLocation || '');
  const [passengerCountState, setPassengerCount] = useState(passengerCount || 0);
  const [selectedOptionState, setSelectedOption] = useState(selectedOption || '');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [luggageCount, setLuggageCount] = useState(0);
  const [email, setEmail] = useState('');

  const options = [
    { key: 'fromAirport', label: "From Airport" },
    { key: 'toAirport', label: "To Airport" }
  ];
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
  };



  return (
    <div className='flex items-center w-full h-screen justify-center bg-cover'
      style={{ backgroundImage: `url('https://img.freepik.com/free-vector/aesthetic-shadow-beige-texture-background_53876-120565.jpg?size=626&ext=jpg')` }}>
        <div className="block max-w-sm rounded-lg bg-black bg-cover p-6 shadow-lg dark:bg-neutral-700">
          <form>
      <TextHeader title="Form" />
      <Select label="Service Type" value={selectedOptionState} options={options} onSelect={setSelectedOption} />
      <Input type="datetime-local" label="Time" value={timeState} onChange={(e) => setTime(e.target.value)} />
      <Input label="Pickup Location" value={pickupLocationState} onChange={(e) => setPickupLocation(e.target.value)} />
      <Input label="Dropoff Location" value={dropoffLocationState} onChange={(e) => setDropoffLocation(e.target.value)} />
      <Input type="number" label="Passenger Count" value={passengerCountState} onChange={(e) => setPassengerCount(e.target.value)} />
      <Input label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <Input label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <Input label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <Input type="number" label="Luggage Count" value={luggageCount} onChange={(e) => setLuggageCount(e.target.value)} />
      <Input label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <Button title="Submit" onClick={handleSubmit} />
      </form>
      </div>
    </div>
  );
};

export default Form;