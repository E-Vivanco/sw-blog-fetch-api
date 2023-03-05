import { useEffect, useContext,useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";

export const VehiclePage = () => {
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();
  const {detallev}=store
  const {getVehicle}=actions
  getVehicle(id)
console.log("soy detalle de vehicle", detallev);
  
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-4 auto">
      <img 
      src={`/assets/img/vehicles/vehicle-${id}_${name}.jpg`}
      alt={name}
      className="img-thumbnail w-100"
      />
      </div>
      <div className="col-8 auto texto1">
       <div key={detallev.name}>
       <table className="tabla w-100">
          <tbody>
          <th className="tabla container"><h1 className="texto">{detallev.name} </h1>
          <td>
          <tr>Model: {detallev.model}</tr>
          <tr>Vehicle_Class: {detallev.vehicle_class}</tr>
          <tr>Passerger: {detallev.passengers}</tr>
          <tr>Max Atmosphering Speed: {detallev.max_atmosphering_speed}</tr>
          <tr>Manufacturer: {detallev.manufacturer}</tr>
          <tr>Length: {detallev.length}</tr>
          <tr>Crew: {detallev.crew}</tr>
          <tr>Cost: {detallev.cost_in_credits}</tr>
          <tr>Consumables: {detallev.consumables}</tr>
          <tr>Capacity:{detallev.cargo_capacity} </tr>
          </td>
          </th>
          </tbody>
          </table>

       
       </div>
        
        
      </div>
    </div>
    </div>
  )
}
