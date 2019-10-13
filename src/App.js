import React, { useEffect } from "react";
import "./App.css";

function App({ onLoad, dogBreeds, fetchDogPicture, dogPicture }) {
  useEffect(onLoad, []);

  const onChangeBreed = e => fetchDogPicture(e.target.value);

  return (
    <div className="container">
      <h3>Select dog breed</h3>
      <select onChange={onChangeBreed}>
        <option>--</option>
        {Object.keys(dogBreeds).map(breed => (
          <option key={breed}>{breed}</option>
        ))}
      </select>
      {dogPicture && (
        <div className="picture-frame">
          <img src={dogPicture} alt="dog" />
        </div>
      )}
    </div>
  );
}

export default App;
