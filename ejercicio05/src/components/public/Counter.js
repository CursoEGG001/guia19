/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador de clicks</h1>
      <p className="App-logo">El contador es: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar contador</button>
    </div>
  );
};

export default Counter;
