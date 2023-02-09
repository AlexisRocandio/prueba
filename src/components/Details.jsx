import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unDetails } from "../funciones/funciones";


const Details = () => {
  const [details, setDetails] = useState(null);
  const params = useParams();
  useEffect(() => {
    unDetails(params.id, setDetails);
  }, []);
  return (
    <>
      {details !== null ? (
        <div className="flex justify-center text-center text-white">
          <div className="rounded-lg shadow-lg bg-white max-w-sm  bg-gray-900">
            <div className="font-medium leading-tight text-5xl decoration-orange-700 ">
              {" "}
              {details.name}
            </div>
            {details.status === "Alive" ? (
              <div className="flex space-x-2 justify-center">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  .
                </button>
              </div>
            ) : details.status === "Dead" ? (
              <div className="flex space-x-2 justify-center">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  .
                </button>
              </div>
            ) : details.status === "unknown" ? (
              <div className="flex space-x-2 justify-center">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  .
                </button>
              </div>
            ) : (
              <button className="btn btn-danger"></button>
            )}
            <p>_</p>
            <img className="w-full" src={details.image} alt="" />
            <div className="px-6 py-4 ">
              <p>{details.species}</p>
              <p>{details.type}</p>
              <p>{details.gender}</p>
              <p> {details.origin.name}</p>
              <p>{details.location.name}</p>
              <p>{`Aparece en ` + details.episode.lenght + " episodios"}</p>
            </div>
          </div>
        </div>
      ) : (
        "no hay personaje"
      )}
    </>
  );
};

export default Details;
