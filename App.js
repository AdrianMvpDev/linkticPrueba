import { useEffect, useState } from "react";
import "./App.css";


function App() {

  const [frutas, setFrutas] = useState([])

  const initialUrl = "http://127.0.0.1:8888/api/fruits";

  const fetchFruits = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFrutas(data.data.fruits))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchFruits(initialUrl);
  }, []);

  return (
    <div className="App">
      <div className="App-form">
        <select className="form-control selectpicker" data-live-search="true">
        <option >Select an item</option>
          {frutas.map((fruta, i) => (
            <option key={i} value={i}>
              {fruta}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
