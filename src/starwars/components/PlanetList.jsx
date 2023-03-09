
//import { getStore } from '../helpers';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { PlanetCard } from './';

export const PlanetList = () => {
  // const store2 =getStore(publicado);
  const { store, actions } = useContext(Context);
  if (store.planets) {
    return (
      <div className='row rows-cols-1 row-cols-md-3 g-2'>
        {store.planets.results.map((stor, index1) => (
          <PlanetCard
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