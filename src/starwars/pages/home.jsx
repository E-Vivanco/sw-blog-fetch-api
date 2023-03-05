import React from 'react';
import '../../index.css';

export const Home = () => {
  const img1=`./assets/img/logoSW.jpg`
  return (
    <div className='container my-2 mb-5'>
    <img src={img1} alt="imagen" className='container2 img2'/>
    </div>
  )
}

export default Home