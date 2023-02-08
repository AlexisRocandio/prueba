import React, {useEffect, useState} from 'react';
import { todosPersonajes } from '../funciones/funciones';

const Todo = () =>{
    const [personajes, setPersonajes]= useState(null)

    useEffect(()=>{
        todosPersonajes(setPersonajes)
    },[])

    
    return (
      <>
      <div className="flex justify-center text-justify  bg-gray-900">
      <div className="flex ml-5 mx-5 flex-wrap mt-5 ">
      {personajes !== null ? (
        personajes.map(details =>(
            <div className = "w-full sm:w-1/2 md:w-1/3 flex-wrap px-10" key={details.id}> 
            <img classclassName="w-full" src={details.image} alt = ""/>
            <a classclassName="text-gray-900 text-xl font-medium mb-2 text-center" href= {`/details/${details.id}`}>{details.name}</a>
            <p className="text-gray-700 text-base">{details.status}</p>
            </div>
            
        ))
      ): ('Sin personajes')}
      </div>
      </div>
      </>
    )
    
}
export default Todo