import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CpoLayout from "./layouts/CpoLayout";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/inventory/InventoryPage";
import OwnersPage from "./pages/owners/OwnersPage";
import Offers from "./pages/offers/Offers";
import Preowned from "./pages/preowned/Preowned";
import CpoInentory from "./pages/cpoinventory/CpoInentory";
import CpoBenefits from "./pages/benefits/CpoBenefits";
import CpoMaintenance from "./pages/maintenance/CpoMaintenance";
import CpoProtection from "./pages/protection/CpoProtection";
import VehiclesPage from "./pages/vehicles/VehiclesPage";
import CarDetails from "./pages/cardetails/CarDetails";
import Build from "./pages/build/Build";
import ElectricDetails from "./pages/ElectricDetails";
import ElectricBuild from "./pages/ElectricBuild";


function App() {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage  />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/owners" element={<OwnersPage />} />
        <Route path="/offers" element={<Offers />} />
      </Route>
      <Route path="/build/:name/:id" element={<Build />} />
      <Route path="/electricbuild/:name/:id" element={<ElectricBuild />} />
      <Route path="/vehicles" element={<VehiclesPage />} />
      <Route path="/vehicles/:name" element={<CarDetails />} />
      <Route path="/electric/:name" element={<ElectricDetails />} />
      <Route path="/cpo" element={<CpoLayout />}>
        <Route index element={<Preowned />} />
        <Route path="/cpo/inventory" element={<CpoInentory />} />
        <Route path="/cpo/benefits" element={<CpoBenefits />} />
        <Route path="/cpo/maintenance" element={<CpoMaintenance />} />
        <Route path="/cpo/protection" element={<CpoProtection />} />
      </Route>
    </>
  )
);
  return <RouterProvider router={router} />;
}

export default App;
