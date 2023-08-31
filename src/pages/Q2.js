import React from "react";
import "./styles.css";
import { useState } from "react";
export default function Q2() {
  const [city, setCity] = useState([]);
  let Data = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai", "Kolkāta", "Bangalore"]
    },
    {
      name: "Canada",
      value: "CA",
      cities: ["Toronto", "Montréal", "Vancouver", "Calgary"]
    },
    {
      name: "Japan",
      value: "JP",
      cities: ["Tokyo", "Nagoya", "Ōsaka", "Yokohama"]
    }
  ];
  //return <DynamicChkBtn />;
  const Changehandler = (e) => {
    let city = Data.filter((x) => {
      return e.target.value === x.name;
    });
    setCity(city[0].cities);
  };
  return (
    <>
      <select onChange={Changehandler}>
        {Data.map((x) => {
          return <option value={x.name}>{x.name}</option>;
        })}
      </select>
      <select>
        {city.map((x) => {
          return <option value={x}>{x}</option>;
        })}
      </select>
    </>
  );
}
