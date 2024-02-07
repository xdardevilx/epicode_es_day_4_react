import { API_KEY, API_KEY_PARAM, BASE_URL, SEARCH_PARAM } from "../const";

// gestico la chiamata api in un foglio singolo in maniera da rendere il codice più pulito ed organizzato
async function searchFromIdAPI(movieId) {
  let url = new URL(BASE_URL);
  url.searchParams.append(API_KEY_PARAM, API_KEY);
  url.searchParams.append("i", movieId);
  try {
    let response = await fetch(url);
    console.log("response", await response.json());
    // return await response.json();
  } catch (err) {
    console.log("error", err);
  }
}

export default searchFromIdAPI;
