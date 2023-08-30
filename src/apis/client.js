import axios from "axios";

// for https
const client = axios.create({baseURL:"https://meta-scrap-services.onrender.com/api"});

export default client