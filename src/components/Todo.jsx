import React, { useEffect, useState } from "react";
import axios from "axios";
import { todosPersonajes } from "../funciones/funciones";

const Todo = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    async function fetchData(){
      const peticion = await axios.get(`https://rickandmortyapi.com/api/character`);
      setPersonajes(peticion.data.results);
    }
fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-center text-justify  bg-gray-900 ">
        <div className="flex ml-5 mx-5 flex-wrap mt-5 ">
          {personajes !== null
            ? personajes.map((details) => (
                <div
                  className="w-full sm:w-1/2 md:w-1/3 flex-wrap px-10 "
                  key={details.id}
                >
                  <img className="w-full" src={details.image} alt="" />
                  <a
                    className="text-white text-xl font-medium mb-2 text-center text-white"
                    href={`/details/${details.id}`}
                  >
                    {details.name}
                  </a>
                  <p className="text-white text-base">{details.status}</p>
                </div>
              ))
            : "Sin personajes"}
        </div>
      </div>
    </>
  );
};
export default Todo;
