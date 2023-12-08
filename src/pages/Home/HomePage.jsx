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


  const onButtonClick = () => {
    //TODO: Add validation here 
    navigate("/airport-transfer")
  }

  return (
    <div
      className="block max-w-sm rounded-lg bg-black bg-cover p-6 shadow-lg dark:bg-neutral-700"
    >
      <TextHeader title={cardHeader} />
      <p
        className="mb-4 text-base text-neutral-600 text-white  dark:text-neutral-200"
      >
        Sarajevo Airport Shuttle, Sarajevo Car Service, or Express Service
      </p>

      <Select className={"mb-2"} label="Service Type" value={selectedOption} options={options} onSelect={setSelectedOption} />
      <Input className={"mb-2"} label={
        selectedOption !== options[0].key ? "Pickup Address" : "Dropoff Address"}
        onChange={selectedOption !== options[0].key ? (e) => setPickupLocation(e.target.value) : (e) => setDropoffLocation(e.target.value)}
        value={selectedOption !== options[0].key ? pickupLocation : dropoffLocation} />
      <Input value={time} className={"mb-2"} label={"Date and Time"} type="datetime-local" onChange={(e) => { setTime(e.target.value) }} />
      <Input type={"number"} className={"mb-2"} label={"Passengers"} onChange={(e) => setPassengerCount(e.target.value)} value={passengerCount} />

      <Button className={"mb-2"} title={'BOOK NOW'} onClick={onButtonClick} />
    </div >
  );
}

export default HomePage;
