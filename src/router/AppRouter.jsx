import React from 'react'
import { injectContext, NotFoundPage } from '../starwars';
import { Route, Routes } from 'react-router-dom'
import { Home, PeoplesPage, PlanetsPage, VehiclesPage } from '../starwars/pages';
import { NavBar_sw } from '../starwars';
import { Footer, PeoplePage, PlanetPage, VehiclePage } from '../starwars/components';
import { BrowserRouter } from 'react-router-dom';

const AppRouter = () => {

  return (
    <>

      <BrowserRouter>
        <React.StrictMode>
          <NavBar_sw />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="people" element={<PeoplesPage />} />
            <Route path="planet" element={<PlanetsPage />} />
            <Route path="vehicle" element={<VehiclesPage />} />
            <Route path="people/people/:name/:id" element={<PeoplePage />} />
            <Route path="planet/planets/:name/:id" element={<PlanetPage />} />
            <Route path="vehicle/vehicle/:name/:id" element={<VehiclePage />} />
            <Route path="/not-found" element={<NotFoundPage />} />

          </Routes>
          <Footer />
        </React.StrictMode>
      </BrowserRouter>
    </>
  )
}
export default injectContext(AppRouter);