import { useEffect, useContext,useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";

export const PlanetPage = () => {
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();
  //const [detallepl,seDetallepl]=useState([])
  const {detallepl}=store
  const {getPlanet}=actions
  getPlanet(id)
console.log("soy detalle de planet", detallepl);
 
  
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-4 auto">
      <img 
      src={`/assets/img/planets/planet-${id}_${name}.jpg`}
      alt={name}
      className="img-thumbnail w-100"
      />
      </div>
      <div className="col-8 auto texto1">       
      <div className="container tabla">
       <div key={detallepl.name}>
       
      <table className="mx-5 my-4">
          <h1 className="texto">{detallepl.name} </h1>
          
          <tr>Climate: {detallepl.climate}</tr>
          <tr>Diameter: {detallepl.diameter}</tr>
          <tr>Gravity: {detallepl.gravity}</tr>
          <tr>Orbital Period: {detallepl.orbital_period}</tr>
          <tr>Population: {detallepl.population}</tr>
          <tr>Rotation Period: {detallepl.rotation_period}</tr>
          <tr>Surface Water: {detallepl.surface_water}</tr>
          <tr>Terrain: {detallepl.terrain}</tr>
          
          </table>
          </div>
      </div>
    </div>
    </div>
    </div>

  )
}
