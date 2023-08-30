import axios from "axios";

// for https
const client = axios.create({baseURL:"https://meta-scrap-services.onrender.com/api"});
// const client = axios.create({baseURL:"http://localhost:8000/api"});

export default client