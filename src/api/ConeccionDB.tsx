import axios from 'axios';

//axios
const serieDB = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export default serieDB;
