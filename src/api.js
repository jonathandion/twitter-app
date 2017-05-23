// @flow

function getJSON(url: string) {
  return fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    return response.json();
  });
}

export default {
  getJSON,
};
