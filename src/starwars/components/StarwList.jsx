
import { useContext, useState } from 'react';
import { Context } from '../store/appContext';
//import {Pagination} from 'react-js-pagination';
import { StarwCard } from './StarwCard';

export const StarwList = () => {

  const { store, actions } = useContext(Context);

  console.log("soy store people", store)
  if (store.people) {
    return (
      <div className='row rows-cols-1 row-cols-md-3 g-2'>
        {store.people.results.map((stor, index1) => (
          <StarwCard
            key={stor.uid}
            {...stor}
            index1={index1}
          />
        ))}
      </div>
    )
  }
  else {
    return (
      <>
        <div className='spinner-border text-warning' role="status">
          <span className='visually-hidden'>Loading....</span>
        </div>
      </>
    )
  }
}
