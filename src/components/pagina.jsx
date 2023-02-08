import React from 'react'

const Pagina =({prev, next,onPrev, onNext}) =>{
   
   const previusPagina =()=>{
        onPrev();
   }
   
   const nextPagina =()=>{
        onNext();
}
    return(
        <nav>
            <div className="inline-flex ">
                {
                    prev ?(
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={previusPagina}>
                            Anterior
                         </button>
                    ): null
                }
                {
                    next ? (
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={nextPagina}>
                            Siguiente
                        </button>
                    ):null
                }
            </div>
        </nav>

    )
}

export default Pagina