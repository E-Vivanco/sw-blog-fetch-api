import { useEffect } from "react";
const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          people: '',
          detallepep:'',
          planet: '',
          planets: '',
          vehicle: '',
          vehicles: '',
          detallev: '',
          detallepl:'',
          favoritos: []
      },
      actions: {
        getPeople:(url)=>{
            fetch(url)
            .then(data => data.json())
           // console.log("peoples",people)
            .then(lectura =>
                setStore(
                    {people: lectura}
                ))
            
            .catch((e)=> console.log(e))

         },
          getCharacteristic: (id)=>{
            useEffect(()=>{
                let urlPep = `https://www.swapi.tech/api/people/${id}`
                fetch(urlPep)
                .then(data =>data.json())
                .then(lectura =>
                  setStore({detallepep:lectura.result.properties}))
                .catch((e)=>console.log(e))
              },[])
         },
         getPlanets:(url)=>{
            fetch(url)
            .then(data => data.json())
           // console.log("planetas",planets)  
            .then(lectura =>
                setStore(
                    {planets: lectura}
                ))
             
            .catch((e)=>console.log(e))

         },
        getPlanet: (id)=>{
            useEffect(()=>{
                let urlPl = `https://www.swapi.tech/api/planets/${id}`
                fetch(urlPl)
                .then(data =>data.json())
                .then(lectura =>
                  setStore({detallepl:lectura.result.properties}))
                .catch((e)=>console.log(e))
              },[])
         },
         getVehicles:(url)=>{
            fetch(url)
            .then(data => data.json())
          //  console.log("vehiculos",vehicles)
            .then(lectura =>
                setStore(
                    {vehicles: lectura}
                ))
            
            .catch((e)=>console.log(e))

         },
         getVehicle: (id)=>{
            useEffect(()=>{
                let urlVeh = `https://www.swapi.tech/api/vehicles/${id}`
                fetch(urlVeh)
                .then(data =>data.json())
                .then(lectura =>
                  setStore({detallev:lectura.result.properties}))
                .catch((e)=>console.log(e))
              },[])
         },
         almacenarFavorito:(name)=>{
            let {favoritos}=getStore();
            setStore({favoritos:[...favoritos,name]})
            console.log("Favoritos: ",getStore().favoritos)
         },
         removerFavorito: (element) => {
          let { favoritos } = getStore();
          let newFavoritos = favoritos.filter(item => item !== element);
          setStore({
              favoritos: newFavoritos
          });
          setExiste(true)
      }

      }
          
      }
  }


export default getState;
