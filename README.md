This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Discogs Search

This is a small project that uses the Discogs API to find artists and display their releases in a sortable list.

To run use yarn `run start`

## To run Locally

Create a file called `config.js` under `src/API`
On this file export a config object that follows this format:
```javascript
export const config = {
  consumerKey: DISCOGS_CONSUMER_KEY,
  secretKey: DISCOGS_SECRET_KEY,
  baseUri: "https://api.discogs.com"
};
```
