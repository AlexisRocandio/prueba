import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Pagina from "./components/pagina";
import Busqueda from "./components/Busqueda";

function App() {
  const [info, setInfo] = useState({});
  let [nombre, setSearch] = useState("");

  const api = "https://rickandmortyapi.com/api/character";

  const fetchCaracteres = (api) => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchCaracteres(api);
  }, []);

  const onPrev = () => {
    fetchCaracteres(info.prev);
    console.log(info.prev);
  };
  const onNext = () => {
    fetchCaracteres(info.next);
    console.log(info.next);
  };

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <Busqueda setSearch={nombre} />
      <div className="grid justify-items-center bg-gray-800 text-white">
        <Pagina
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todo className="bg-dark"></Todo>}></Route>
            <Route path="/details/:id" element={<Details></Details>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
