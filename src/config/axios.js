import axios from "axios";
import { API_KEY } from "../constant/constant";

const instance = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com/",
  timeout: 10000,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
})

export default instance;