import React, { useState } from 'react';
import TextHeader from '../../components/TextHeader';
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";
import Select from '../../components/Select';
import Input from '../../components/Input';

function HomePage() {
  const options = [
    { key: 'fromAirport', label: "From Airport" },
    { key: 'toAirport', label: "To Airport" }
  ]
  const navigate = useNavigate()
  const cardHeader = "Reserve your ride"
  const [selectedOption, setSelectedOption] = useState(options[0].key)
  const [time, setTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [passengerCount, setPassengerCount] = useState(0);
  const [pickupError, setPickupError] = useState(null)
  const [dropoffError, setDropoffError] = useState(null)
  const [timeError, setTimeError] = useState(null)
  const [passengerCountError, setPassengerCountError] = useState(null)

  const validateForm = () => {
    let isValid = true;

    if (selectedOption === 'fromAirport' && dropoffLocation.trim().length < 1) {
      setDropoffError('Please enter your dropoff location.');
      isValid = false;
    }

    if (selectedOption === 'toAirport' && pickupLocation.trim().length < 1) {
      setPickupError('Please enter your pickup location.');
      isValid = false;
    }

    if (new Date(time) < new Date()) {
      setTimeError('Date and time cannot be in the past.');
      isValid = false;
    }
    if (time === '') {
      setTimeError('Please select a date and time.');
      isValid = false;
    }

    if (passengerCount <= 0) {
      setPassengerCountError('Passenger count should be more than 0.');
      isValid = false;
    }

    return isValid;
  }

  const onButtonClick = () => {
    if (!validateForm()) return

    navigate("/airport-transfer", { state: { time, pickupLocation, dropoffLocation, passengerCount, selectedOption } });
  }

  return (
    <div
      className="block max-w-sm rounded-lg bg-black bg-cover p-6 shadow-lg dark:bg-neutral-700">

      <TextHeader title={cardHeader} />
      <p
        className="mb-4 text-base text-neutral-600 text-white  dark:text-neutral-200"
      >
        Sarajevo Airport Shuttle, Sarajevo Car Service, or Express Service
      </p>

      <Select className={"mb-2"} label="Service Type" value={selectedOption} options={options} onSelect={setSelectedOption} />
      {selectedOption === 'fromAirport' && <Input className={"mb-2"} label="Dropoff Address" onChange={(e) => { setDropoffLocation(e.target.value); setDropoffError(null); }} value={dropoffLocation} error={dropoffError} />}
      {selectedOption === 'toAirport' && <Input className={"mb-2"} label="Pickup Address" onChange={(e) => { setPickupLocation(e.target.value); setPickupError(null); }} value={pickupLocation} error={pickupError} />}
      <Input value={time} className={"mb-2"} label={"Date and Time"} type="datetime-local" onChange={(e) => { setTime(e.target.value); setTimeError(null); }} error={timeError} />
      <Input type={"number"} className={"mb-2"} label={"Passengers"} onChange={(e) => { setPassengerCount(parseInt(e.target.value, 10)); setPassengerCountError(null); }} value={passengerCount} error={passengerCountError} />
      <Button className={"mb-2"} title={'BOOK NOW'} onClick={onButtonClick} />
    </div >
  );
}

export default HomePage;
