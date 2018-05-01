const TIME_OUT = 30000;
export const API_BASE = "https://content.viaplay.se/pc-se/serier";

let fetchTimeout = new Promise((resolve, reject) => {
  let wait = setTimeout(() => {
    clearTimeout(wait);
    resolve("Time out");
  }, TIME_OUT);
});

export const getRequest = url =>
  Promise.race([
    fetch(url, {
      type: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(error => console.error(error)),
    fetchTimeout
  ]);
