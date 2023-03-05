import React ,{useContext}from 'react';
import { Context } from '../store';
import { VehicleList } from '../components';
//console.log("vehicle publicado es",publicado)
export const VehiclesPage = () => {
  const {store,actions}=useContext(Context);
  
  return (
    <>
    <VehicleList vehicle={store.vehicle}/>

    </>
  )
}
