import React from 'react'
import { injectContext, NotFoundPage, PeoplesPage, StarwarsRoutes } from '../starwars';
import { Route,Routes } from 'react-router-dom'
//import { StarHeader} from '../starwars';
//import {PeoplesPage } from '../starwars';
import { BrowserRouter } from 'react-router-dom';

const AppRouter = () => {
  
  return (
    <>
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path ="/home/*" element={<StarwarsRoutes />}/>
      <Route path="/not-found/*" element ={<NotFoundPage/>}/>
    </Routes>
    </React.StrictMode>
    </BrowserRouter> 
    </>
  )
}
export default injectContext(AppRouter);