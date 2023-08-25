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

export const registerUser = async (userData) => {
  const apiKey = "AIzaSyCg-aGXdDyW664xnInlmReVrGJM194tIDI";
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

  const response = await fetchWrapper.post(url, userData);
  return response;
};

export const loginUser = async (userData) => {
  const apiKey = "AIzaSyCg-aGXdDyW664xnInlmReVrGJM194tIDI";
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

  const response = await fetchWrapper.post(url, userData);
  return response;
};
