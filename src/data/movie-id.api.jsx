import { API_KEY, API_KEY_PARAM, BASE_URL, ID_PARAM } from "../const";

async function searchFromIdAPI(movieId) {
  let url = new URL(BASE_URL);
  url.searchParams.append(API_KEY_PARAM, API_KEY);
  url.searchParams.append(ID_PARAM, movieId);
  try {
    console.log(movieId);
    let response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log("error", err);
  }
}

export default searchFromIdAPI;
