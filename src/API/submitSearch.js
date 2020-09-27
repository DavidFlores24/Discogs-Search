import "fetch";
import "dotenv";

import { stringify } from "qs";

/**
 * submit the search with the artist to the Discogs API
 * @param {String} artist
 * @returns {Promise<Object>} a promise that resolves to a JSON object with the response
 */
export const submitSearch = async artist => {
  const consumerKey = "";
  const secretKey = "";
  const baseUri = "https://api.discogs.com";

  const query = {
    q: artist,
    type: "artist",
    pages: 1,
    per_page: 10
  };

  const headers = new Headers({
    Authorization: `Discogs key=${consumerKey}, secret=${secretKey}`
  });

  const uri = `${baseUri}/database/search?${stringify(query)}`;

  const response = await fetch(uri, {
    headers: headers
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error(res);
      }
    })
    .then(res => res)
    .catch(err => {
      console.error(err);
      return {};
    });

  return response;
};
