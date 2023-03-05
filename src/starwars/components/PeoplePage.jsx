import { useEffect, useContext,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store";


export const PeoplePage = () => {
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();
  const {detallepep}=store
  const {people}=store
  const {getCharacteristic,getPlanet}=actions
  
  //const {store.people}=store
  getCharacteristic(id)
  getPlanet(id)
  console.log("soy people", people);
  console.log("soy detalle -people",detallepep)
  const navigate = useNavigate()
  const volver=()=>{
    navigate('/people')
  }
  return (
    <div className="container ">
    <div className="row mt-5">
      <div className="col-4 auto my-1">
      <img 
      src={`/assets/img/people/people-${id}_${name}.jpg`}
      alt={name}
      className="img-thumbnail w-100 my-4"
      />
       <button className="btn btn-warning" onClick={volver}>Peoples</button>    
      </div>
      <div className="col-8 auto texto1">
        <div className="container tabla">
        <div key={detallepep.height}>
          <table className=" mx-5 my-4">
          
          <h1 className="texto1">{detallepep.name}</h1>
          
          <tr>Gender:<td>{detallepep.gender}</td> </tr>
          <tr>Birth-year:<td>{detallepep.birth_year}</td> </tr>
          <tr>Eyes:<td>{detallepep.eye_color}</td> </tr>
          <tr>Hair: <td>{detallepep.hair_color}</td></tr>
          <tr>Height: <td>{detallepep.height}</td></tr>
          <tr>Mass:<td>{detallepep.mass}</td> </tr>
          <tr>Skin:<td>{detallepep.skin_color}</td> </tr>    
          
          </table>
        </div>
        </div>
      </div>

    </div>
    </div>
  )
}
