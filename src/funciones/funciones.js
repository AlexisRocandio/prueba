import axios from 'axios'

const todosPersonajes = async (state, page)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    state(peticion.data.results)
}

const unDetails = async (id,state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`, `https://rickandmortyapi.com/api/episode/${id}`)
    state(peticion.data)
}

const episodiosNum = async (id, state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
    state(peticion.episode)
}



export{ todosPersonajes, unDetails, episodiosNum}