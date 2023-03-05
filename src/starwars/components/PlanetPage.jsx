import { useEffect, useContext,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
const navigate = useNavigate()
const volver=()=>{
  navigate('/planet')
}
  
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-4 auto">
      <img 
      src={`/assets/img/planets/planet-${id}_${name}.jpg`}
      alt={name}
      className="img-thumbnail w-100 my-4"
      />
      <button className="btn btn-warning" onClick={volver}>Planets</button>
      </div>
      <div className="col-8 auto texto1">       
      <div className="container tabla">
       <div key={detallepl.name}>
       
      <table className="mx-5 my-4">
          <h1 className="texto1">{detallepl.name} </h1>
          
          <tr>Climate:<td>{detallepl.climate}</td> </tr>
          <tr>Diameter:<td>{detallepl.diameter}</td> </tr>
          <tr>Gravity:<td>{detallepl.gravity}</td> </tr>
          <tr>Orbital Period:<td>{detallepl.orbital_period}</td> </tr>
          <tr>Population:<td>{detallepl.population}</td> </tr>
          <tr>Rotation Period:<td>{detallepl.rotation_period}</td> </tr>
          <tr>Surface Water:<td> {detallepl.surface_water}</td></tr>
          <tr>Terrain:<td>{detallepl.terrain}</td> </tr>
          
          </table>
          </div>
      </div>
    </div>
    </div>
    </div>

  )
}
