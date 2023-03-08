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
        getPeople: async (url, options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      }) => {
          try {
              const response = await fetch(url, options);
              if (response.status !== 200) {
                  throw new Error({ message: 'Error fetching Characters.' })
              }
              const data = await response.json();
              setStore({
                  people: data
              });
              const {people}= getStore()
              people.results.forEach(element=>{
                element['existe']= false;
              })
              setStore({people:people})
          } 
          catch (error) {
              setStore({
                  error: error.message
              });
          }
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
         getPlanets: async (url, options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      }) => {
          try {
              const response = await fetch(url, options);
              if (response.status !== 200) throw new Error("Error fetching Planet");
              const data = await response.json();
              setStore({
                  planets: data
              });
              const {planets}= getStore()
              planets.results.forEach(element=>{
                element['existe']= false;
              })
              setStore({planets:planets})
          } catch (error) {
              setStore({
                  error: error.message
              })
          }
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
         getVehicles: async (url, options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      }) => {
          try {
              const response = await fetch(url, options);
              if (response.status !== 200) throw new Error("Error fetching Vehicle");
              const data = await response.json();
              setStore({
                  vehicles: data
              })
              const {vehicles}= getStore()
              vehicles.results.forEach(element=>{
                element['existe']= false;
              })
              setStore({vehicles:vehicles})
          } catch (error) {
              setStore({
                  error: error.message
              })
          }
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
         almacenarFavoritoPP :(name,index1)=>{
            let {favoritos,people}=getStore();
           // if(people.results.uid === index1)
            people.results[index1].existe= true;
            let favorito={
              name: name,
              index1: index1
            }
            setStore({favoritos:[...favoritos,favorito],people:people})
            console.log("Favoritos: ",getStore().favoritos)
         },
         almacenarFavoritoPL:(name,index1)=>{
            let {favoritos,planets}=getStore();
           // if(planets.results.uid === index1)
            planets.results[index1].existe= true;
            let favorito={
              name: name,
              index1: index1
            }
            setStore({favoritos:[...favoritos,favorito],planets:planets})
            console.log("Favoritos: ",getStore().favoritos)
         },
         almacenarFavoritoVH :(name,index1)=>{
            let {favoritos,vehicles}=getStore();
            //vehicles.results.index1 = existe
            vehicles.results[index1].existe= true;
            let favorito={
              name: name,
              index1: index1
            }
            setStore({favoritos:[...favoritos,favorito],vehicles:vehicles})
            console.log("Favoritos: ",getStore().favoritos)
         },
         removerFavorito: (element,index) => {
          
          let { favoritos,people,planets,vehicles } = getStore();
          //if(people.results[index].existe === true ){
            element.name === people.results[index].name ?
            people.results[index].existe = false
            : ""
            console.log("remov",people.results[index].name)
            console.log("remov",element.name)
         // }
         // if(planets.results[index].existe === true ){
          element.name === planets.results[index].name ?
            planets.results[index].existe = false
            : ""
         // }
         // if(vehicles.results[index].existe === true ){
          element.name === vehicles.results[index].name ?
            vehicles.results[index].existe = false
            : ""
         // }
          //console.log("que remov_",res)
          let newFavoritos = favoritos.filter((item,index) => item.name !== element.name);
          setStore({
              favoritos: newFavoritos,
              people:people,
              planets:planets,
              vehicles:vehicles
              
          });
          
      }

      }
          
      }
  }


export default getState;
