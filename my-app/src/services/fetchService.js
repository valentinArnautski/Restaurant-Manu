import { fetchWrapper } from "./fetchWrapper";
import config from "./config.json";

export const getMeals = async () => {
  return fetchWrapper.get(`${config.baseUrl}${config.meals}`);
};

export const getDrinks = async () => {
  return fetchWrapper.get(`${config.baseUrl}${config.drinks}`);
};

export const getWines = async () => {
  return fetchWrapper.get(`${config.baseUrl}${config.wines}`);
};
