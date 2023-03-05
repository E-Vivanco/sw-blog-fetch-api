import React from 'react'
import { NavBar_sw } from '../ui';
import { PeoplesPage,PlanetsPage,VehiclesPage,Home,NotFoundPage } from '../pages';
import { PeoplePage,PlanetPage,VehiclePage } from '../components';
import { Routes,Route } from 'react-router-dom';
//import {Pagination} from '../components/Pagination';
import {Footer} from '../components/Footer'


export const StarwarsRoutes = () => {
  
  return (
    <>
    
    <NavBar_sw />
    <div className='container'>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="people" element={<PeoplesPage />}/>
        <Route path="planet" element ={<PlanetsPage/>}/>
        <Route path="vehicle" element ={<VehiclesPage/>}/>
        <Route path="/not-found" element ={<NotFoundPage/>}/>
 
        <Route path ="people/people/:name/:id" element={<PeoplePage/>}/>
        
        <Route path ="planet/planets/:name/:id" element={<PlanetPage/>}/>
        
        <Route path ="vehicle/vehicle/:name/:id" element={<VehiclePage/>}/>
        
           </Routes>
      
      <Footer/>
    </div>
   
    </>
  )
}
