import React, { useContext, useState } from 'react';
import { Context } from '../store';
import { Link } from 'react-router-dom';

export const PlanetCard = ({ uid,
  name,
  url,
  description,
  id,
  existe,
  index1
}) => {

  const starImgUrl = `/assets/img/planets/planet-${uid}_${name}.jpg`;
  const { store, actions } = useContext(Context)
  const { favoritos, planets } = store
  const { almacenarFavoritoPL } = actions
  //console.log("que tengo?", planets.results[index1].existe)
  return (
    <div className='container my-2 mt-4 px-5'>
      <div className='card'>
        <div className='row g-2'>
          <div className='col-6'>
            <img src={starImgUrl} className='card-img my-1 mx-1' alt={name} />
          </div>
          <div className='col-6'>
            <div className='card-body'>
              <h5 className='card-title mx-1'><strong>{name}</strong></h5>
              <p className='card-text'>{description}</p>
              <div className='d-flex mx-1'>
                <Link to={`./planets/${name}/${uid}`}>
                  <strong>Detalles</strong>
                </Link>
                {existe ? '' :
                  <div className='btn btn-secondary mx-3'>
                    <i className="fa-sharp fa-solid fa-heart"
                      onClick={() => almacenarFavoritoPL(planets.results[index1].name, index1)}></i>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
