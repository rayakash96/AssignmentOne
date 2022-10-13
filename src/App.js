import "./styles.css";
import Server from "./Server";
import { useEffect, useState } from "react";

export default function App() {
  const [res, setRes] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <h1>Hello Users</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          Server(event.target.value)
            .then((res) => {
              setRes(res);
            })
            .catch(() => {
              setRes([]);
            });
        }}
      />
      <ul style={{ listStyle: "none" }}>
        {res.map((data, index) => {
          return <li key={index}> {data} </li>;
        })}
      </ul>
    </div>
  );
}
