import React, { Component, useState } from 'react';
import axios from 'axios';

export default class Delivery extends Component {
  const [inputValue, setInputvalue] = useState([]);
  render() {
    return (
      <div>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <p>{inputValue}</p>
      <button
        disabled={inputValue.length === 0}
        type="button"
        onClick={async () => {
          console.log(inputValue);
          try {
            await axios({
              url: "https://google.com/",
              headers: {
                "Content-type": "application/json"
              },
              params: {
                field: inputValue
              },
              method: "GET",
              data: null
            }).then(({ data }) => {
              return data;
            });
          } catch (e) {
            console.log("Sending error", e);
          }
        }}
        style={{ padding: 20, backgroundColor: "red", cursor: "pointer" }}
      >
        Send to ....
      </button>
    </div>
    )
  }
}
