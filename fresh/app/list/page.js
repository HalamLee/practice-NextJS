'use client';

import { useState } from 'react';

export default function List() {
  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  const [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((item, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{item} $40</h4>
            <button
              onClick={() => {
                let copy = [...count];
                copy[idx]--;
                setCount(copy);
              }}>
              -
            </button>
            <span> {count[idx]} </span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[idx]++;
                setCount(copy);
              }}>
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
