import axios from "axios";

export const api = axios.create({});

export const financialApi = axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3/",
  params: {
    apikey: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export async function asyncFetchQuoteShortInformation(stockName: string) {
  try {
    const { data } = await financialApi(`quote-short/${stockName}`);
    return data[0].price;
  } catch (error) {
    throw new Error("Error in Quote-Short Request");
  }
}
