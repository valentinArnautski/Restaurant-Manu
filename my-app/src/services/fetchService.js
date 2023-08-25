import { fetchWrapper } from "./fetchWrapper";
import config from "./config.json";
import { registerUrl, signInUrl } from "../components/Constants/constants";

export const getMeals = async () => {
  return fetchWrapper.get(`${config.baseUrl}${config.meals}`);
};

export const getDrinks = async () => {
  return fetchWrapper.get(`${config.baseUrl}${config.drinks}`);
};

export const getWines = async () => {
  return fetchWrapper.get(`${config.baseUrl}${config.wines}`);
};

export const registerUser = async (userData) => {
  const response = await fetchWrapper.post(registerUrl, userData);
  return response;
};

export const loginUser = async (userData) => {
  const response = await fetchWrapper.post(signInUrl, userData);
  return response;
};
