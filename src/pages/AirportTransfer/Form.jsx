import React, { useState } from 'react';
import Input from '../../components/Input';

const Form = () => {

  // WITH USEEFFECT ON INITIAL RENDER, CATHC DATA FROM HOME PAGE AND SET IT HERE AS A DEFAULT VALUE, USER SHOULD BE ABLE TO EDIT IT

  // AS EXAMPLE USE THE INPUTS FROM HOME PAGE, 

  return (
    <div className='flex items-center w-full h-screen justify-center bg-cover'
      style={{ backgroundImage: `url('https://img.freepik.com/free-vector/aesthetic-shadow-beige-texture-background_53876-120565.jpg?size=626&ext=jpg')` }}
    >
      <div className="block max-w-sm rounded-lg bg-black bg-cover p-6 shadow-lg dark:bg-neutral-700">
        <form>
        
          {/* GET FROM NAVIGATION ADDRESS AND FROM OR TO AIRPORT USER SHOULD BE ABLE TO EDIT IT HERE */}
          {/* GET FROM NAVIGATION DATE AND TIME, USER SHOULD BE ABLE TO UPDATE IT HERE  */}
          {/* GET FROM NAVIGATION NUMBER OF PASSENGERS, USER SHOULD BE ABLE TO EDIT IT HERE */}

          {/* CREATE INPUT WITH LUGAGE COUNT  */}

          {/* CREATE INPUT WITH FIRST NAME FIELD */}

          {/* CREATE INPUT WITH LAST NAME FIELD  */}

          {/* CREATE INPUT WITH PHONE NUMBER  */}

          {/* CREATE INPUT WITH EMAIL ADDRESS, ADD VALIDATION WITH REGEX TO CHECK IS EMAIL ADDRESS VALID */}

          {/* CREATE SUBMIT BUTTON THAT SHOULD PICK UP ALL DATA FROM FORM, VALIDATE IT AND SEND IT */}
         
        </form>
      </div>
    </div>
  );
};

export default Form;
