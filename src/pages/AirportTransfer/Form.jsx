
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import TextHeader from '../../components/TextHeader';

const Form = () => {
  const location = useLocation();
  const { time, pickupLocation, dropoffLocation, passengerCount, selectedOption } = location.state || {};

  const navigate = useNavigate();
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
  const [emailError, setEmailError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [passengerCountError, setPassengerCountError] = useState('');
  const [luggageCountError, setLuggageCountError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [pickupLocationError, setPickupLocationError] = useState('');
  const [dropoffLocationError, setDropoffLocationError] = useState('');
  

  const options = [
    { key: 'fromAirport', label: "From Airport" },
    { key: 'toAirport', label: "To Airport" }
  ];
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return re.test(String(phoneNumber));
  };
  const validateForm = () => {
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (firstName.trim().length < 1) {
      setFirstNameError('Please enter your first name.');
      isValid = false;
    }

    if (lastName.trim().length < 1) {
      setLastNameError('Please enter your last name.');
      isValid = false;
    }

    if (phoneNumber.trim().length < 1 || !validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError('Please enter a valid phone number.');
      isValid = false;
    }

    if (passengerCountState <= 0) {
      setPassengerCountError('Passenger count should be more than 0.');
      isValid = false;
    }

    if (luggageCount <= 0) {
      setLuggageCountError('Luggage count should be more than 0.');
      isValid = false;
    }

    if (selectedOptionState === 'fromAirport' && dropoffLocationState.trim().length < 1) {
      setDropoffLocationError('Please enter your dropoff location.');
      isValid = false;
    }

    if (selectedOptionState === 'toAirport' && pickupLocationState.trim().length < 1) {
      setPickupLocationError('Please enter your pickup location.');
      isValid = false;
    }

    const currentTime = new Date();
    const selectedTime = new Date(timeState);
    if (selectedTime < currentTime) {
      setTimeError('Date and time cannot be in the past.');
      isValid = false;
    }

    return isValid;
  };
  const onButtonClick = () => {
    if (!validateForm()) return

    navigate("/success");
  }


  return (
    <div className='flex items-center w-full h-screen justify-center bg-cover'
      style={{ backgroundImage: `url('https://img.freepik.com/free-vector/aesthetic-shadow-beige-texture-background_53876-120565.jpg?size=626&ext=jpg')` }}>
      <div className="block max-w-sm rounded-lg bg-black bg-cover p-6 shadow-lg dark:bg-neutral-700">
        <form>
          <TextHeader title="Form" />
          <Select label="Service Type" value={selectedOptionState} options={options} onSelect={setSelectedOption} />
          {selectedOptionState === 'fromAirport' && <Input label="Dropoff Location" value={dropoffLocationState}  onChange={(e) => { setDropoffLocation(e.target.value); setDropoffLocationError(''); }} error={dropoffLocationError} />}
          {selectedOptionState === 'toAirport' && <Input label="Pickup Location" value={pickupLocationState}  onChange={(e) => { setPickupLocation(e.target.value); setPickupLocationError(''); }} error={pickupLocationError} />}
          <Input type="datetime-local" label="Time" value={timeState}  onChange={(e) => { setTime(e.target.value); setTimeError(''); }} error={timeError} />
          <Input type="number" label="Passenger Count" value={passengerCountState} onChange={(e) => { setPassengerCount(e.target.value); setPassengerCountError(''); }} error={passengerCountError} />
          <Input label="First Name" value={firstName} onChange={(e) => { setFirstName(e.target.value); setFirstNameError(''); }} error={firstNameError} />
          <Input label="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value); setLastNameError(''); }} error={lastNameError} />
          <Input label="Phone Number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value); setPhoneNumberError('');}} error={phoneNumberError} />
          <Input type="number" label="Luggage Count" value={luggageCount} onChange={(e) => { setLuggageCount(e.target.value); setLuggageCountError(''); }} error={luggageCountError} />
          <Input label="Email Address" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(''); }} error={emailError} />

          <Button title="Submit" onClick={onButtonClick} />
        </form>
      </div>
    </div>
  );
};

export default Form;