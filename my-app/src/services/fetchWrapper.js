import axios from "axios";

const get = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const post = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};

export const fetchWrapper = {
  get,
  post,
};
