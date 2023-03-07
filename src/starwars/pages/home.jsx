import React from 'react';
import '../../index.css';

export const Home = () => {
  const img1=`./assets/img/Hayden_Christensen_as_Anakin_Skywalker.jpg`
  return (
    <div className='container my-2 mb-5 w-100'>
    <img src={img1} alt="imagen" className='container2 img2 w-100'/>
    </div>
  )
}

export default Home