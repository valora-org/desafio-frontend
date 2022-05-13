import axios from "axios";

export const api = axios.create({});

export const financialApi = axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3/",
  params: {
    apikey: process.env.NEXT_PUBLIC_API_KEY,
  },
});
