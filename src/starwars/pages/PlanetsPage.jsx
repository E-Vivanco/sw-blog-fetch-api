import React,{useContext}from 'react'
import { PlanetList } from '../components';
import { Context } from '../store';
//console.log("vehicle publicado es",publicado)
export const PlanetsPage = () => {
  const{store,actions}=useContext(Context);
  
  return (
    <>
    <PlanetList vehicle={store.planets}/>

    </>
  )
}
