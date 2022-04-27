import React from 'react'

export default function getData() {
    return fetch("http://127.0.0.1:3030")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.mephi;
    })
    .catch((error) => {
      console.error(error);
    });
 }
