import axios from 'axios';

const api = axios.create({baseURL:"https://petshopapi.herokuapp.com"});

export default api;