//import { getStore } from '../helpers';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { VehicleCard } from './';

export const VehicleList = (...props) => {
    //const store1 =getStore(publicado);
    const { store, actions } = useContext(Context);
  if(store.vehicles){
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-2'>
        {store.vehicles.results.map((stor,index1) =>(
            <VehicleCard
            key={stor.uid}
            {...stor}
            index1={index1}
            />
        ))}
    </div>
  )}
  else{
    return(
      <>
      <div className='spinner-border text-warning' role="status"> 
      <span className='visually-hidden'>Loading....</span>
      </div>
      </>
    )
  }
}
