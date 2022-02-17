import request from "../utils/request";
const apiKey = "k_7vxv64jv";

export const searchMovies = async (title) => {
  try {
    const { data } = await request.get(`SearchTitle/${apiKey}/${title}`);
    return data.results;
  } catch (e) {
    throw new Error(e);
  }
};