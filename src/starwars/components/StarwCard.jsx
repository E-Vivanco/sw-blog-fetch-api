import React,{useContext,useState} from 'react';
import {Context} from '../store';
import { Link } from 'react-router-dom';

export const StarwCard = ({uid,
name,
url,
description,
id
}) => {
//const {store, actions}=useContext(Context)
const starImgUrl =`/assets/img/people/people-${uid}_${name}.jpg`;
const {store, actions}=useContext(Context)
const[existe,setExiste] = useState(true)
//let {favoritos}=store
//const {almacenarFavorito}=actions
const misColores=[{backgroundColor:"white"},
    {backgroundColor:"yellow"},
    {backgroundColor:"red"}]
const validar=()=>{
  setExiste(false)
  {<i className={`fa-sharp fa-solid fa-heart`} onClick={actions.almacenarFavorito(name)}></i>}
  
console.log("soy existe",existe)
}
return (
   <div className='container my-2 mt-4'>
    <div className='card'>
        <div className='row g-2'>
            <div className='col-6'>
                <img src={starImgUrl} className='card-img' alt={name} />
            </div>
            <div className='col-6'>
              <div className='card-body'>
                  <h5 className='card-title'>{name}</h5>
                  <p className='card-text'>{description}</p>
              <div className='d-flex'>
              <Link to={`./people/${name}/${uid}`}>
                   <strong>Detalles</strong>
              </Link>
              <div className='btn btn-secondary mx-3'>
              <i className={"fa-sharp fa-solid fa-heart" +(existe === false ? `${misColores[0]}` :'') }
              onClick={validar}
              ></i>                  
              </div>
              </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}
