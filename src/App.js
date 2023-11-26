import React from 'react';
import HomePage from './pages/Home/HomePage';
import Form from './Form';

export default function App() {
  return (
    <div className='flex items-center w-full h-screen justify-center bg-cover'
    style={{ backgroundImage: `url('https://img.freepik.com/free-vector/aesthetic-shadow-beige-texture-background_53876-120565.jpg?size=626&ext=jpg')`}}
    >
      <Form />
    </div>
  );
}
