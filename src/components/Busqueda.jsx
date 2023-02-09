import React, { useEffect, useState } from "react";
import axios from "axios";


function Busqueda() {
  const [nombre, setNombre] = useState([]);
  const [tablaNombre, setTablaNombre] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [id, setInfo] = useState([]);


  const peticionGet = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/character?name=${nombre}`)
      .then((response) => {
        setTablaNombre(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    console.log(tablaNombre);
    var [resultadosBusqueda] = tablaNombre.filter((results) => {
      //console.log(results + "*results");
      if (
        results.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return results;
      }
    });

    setNombre(resultadosBusqueda.name);
    setInfo(resultadosBusqueda.id);
    console.log(resultadosBusqueda.image);
    console.log("resultado de busqueda: " + nombre);
    console.log(id);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="App">
      <div className="flex justify-center bg-gray-700 ">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              type="search"
              value={busqueda.name}
              onChange={handleChange}
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              {
                <div className="w-full sm:w-1/2 md:w-1/3 flex-wrap px-10">
                  <a
                    className="text-gray-900 text-xl font-medium mb-2 text-center"
                    href={`/details/${id}`}
                  >
                    {nombre}
                  </a>
                  <img className="w-full" src={setNombre.image} alt="" />
                </div>
              }

              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Busqueda;
