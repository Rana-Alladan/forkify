import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
/*
export const getJSON = async function (url) {
  try {
    // getting the rec info
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    //     `${API_URL}/${id}`
    //   );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err; // to get it in the module
  }
};
export const AJAX = async function (url, upload = undefined) {
  try {
    const fetchPro = upload
    ? fetch(url, {
      method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        : fetch(url);

        // getting the rec info
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
        //     `${API_URL}/${id}`
        //   );
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
      } catch (err) {
        throw err; // to get it in the module
      }
    };
    // export const sendJSON = async function (url, data) {};
    */

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
