import React,{useContext,useState} from 'react';
import {Context} from '../store';
import { Link } from 'react-router-dom';

export const VehicleCard = ({uid,
    name,
    url,
    description,
    id
    }) => {

        const starImgUrl =`/assets/img/vehicles/vehicle-${uid}_${name}.jpg`;
          const {store, actions}=useContext(Context)
         // let {favoritos} = store
         // const {almacenarFavorito}=actions
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
          <div className='container my-2 mt-4 px-5'>
            <div className='card'>
                <div className='row g-2'>
                    <div className='col-6'>
                        <img src={starImgUrl} className='card-img' alt={name} />
                    </div>
                    <div className='col-6'>
                      <div className='card-body'>
                          <h5 className='card-title'>{name}</h5>
                          <p className='card-text'>{description}</p>
                      <Link to={`./vehicle/${name}/${uid}`}>
                            Mas
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
          )
        }
