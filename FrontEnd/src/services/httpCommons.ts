import axios from "axios";

const pokemonUrl = "http://localhost:3001/api";
const type = { 'Content-type': 'application/json' };

const axiosPokemon = axios.create({
    baseURL: pokemonUrl,
    headers: type
});

axiosPokemon.interceptors.request.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || "Error de conexión.";
        console.log("Error: ", message)
        return Promise.reject(error)
    }
)

export default axiosPokemon;