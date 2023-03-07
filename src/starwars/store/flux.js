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
         almacenarFavorito:(name,index1)=>{
            let {favoritos,people}=getStore();
            people.results[index1].existe= true;
            let favorito={
              name: name,
              index1: index1
            }
            setStore({favoritos:[...favoritos,favorito],people:people})
            console.log("Favoritos: ",getStore().favoritos)
         },
         removerFavorito: (element,index1) => {
          let { favoritos,people } = getStore();
          people.results[index1].existe= false;
          let newFavoritos = favoritos.filter(item => item !== element);
          setStore({
              favoritos: newFavoritos,people:people
          });
          
      }

      }
          
      }
  }


export default getState;
