import React, { useState } from "react";
import Header from "./Components/header/Header";
import Filters from "./Components/filter/Filters";
import Coutries from "./Components/countries/Coutries";
import "./App.css";
import Detail from "./pages/countryDetail/Detail";
import { Routes, Route } from "react-router-dom";
import Defination from "./pages/defination/Defination";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters onSearch={setSearchTerm} onFilter={setFilterRegion} />
              <Coutries searchTerm={searchTerm} filterRegion={filterRegion} />
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/definition/:countryName" element={<Defination />}></Route>
      </Routes>
    </>
  );
}

export default App;
