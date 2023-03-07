import { useEffect, useContext,useState } from "react";
import { Navigate, useParams,useNavigate } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";

export const VehiclePage = () => {
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();
  const {detallev}=store
  const {getVehicle}=actions
  getVehicle(id)
console.log("soy detalle de vehicle", detallev);
const navigate = useNavigate()
  const volver=()=>{
    navigate('/vehicle')
  }
  
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-4 auto">
      <img 
      src={`/assets/img/vehicles/vehicle-${id}_${name}.jpg`}
      alt={name}
      className="img-thumbnail w-100 my-4"
      />
      </div>
      <div className="col-8 auto texto1">
      <div className=" d-flex mx-2"><h1 className="texto2">Details of Vehicles</h1>
          <button className="btn btn-warning mx-4" onClick={volver}>Vehicles</button>  
          </div>
        <div className="container tabla">
       <div key={detallev.name}>
       <table className="mx-5 my-4">
        
          <h1 className="texto1">{detallev.name} </h1>
          
          <tr>Model:<td>{detallev.model}</td> </tr>
          <tr>Vehicle_Class: <td>{detallev.vehicle_class}</td></tr>
          <tr>Passerger: <td>{detallev.passengers}</td></tr>
          <tr>Max Atmosphering Speed: <td>{detallev.max_atmosphering_speed}</td></tr>
          <tr>Manufacturer:<td>{detallev.manufacturer}</td> </tr>
          <tr>Length:<td> {detallev.length}</td></tr>
          <tr>Crew:<td>{detallev.crew}</td> </tr>
          <tr>Cost:<td>{detallev.cost_in_credits}</td> </tr>
          <tr>Consumables:<td>{detallev.consumables}</td> </tr>
          <tr>Capacity:<td>{detallev.cargo_capacity}</td> </tr>
          
          </table>
       </div>
       </div>
        </div>
    </div>
    </div>
    
  )
}

