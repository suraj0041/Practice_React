import "./styles.css";
import { useState } from "react";
export default function App() {
  const arrData = [
    {
      name: "apple",
      delete: false
    },
    {
      name: "mango",
      delete: false
    },
    {
      name: "orange",
      delete: false
    }
  ];
  const [Data, setData] = useState(arrData);

  const chkHandler = (e) => {
    debugger;
    let arr2 = Data.map((x) => {
      let sp = e.target.id.split("_")[1];
      if (x.name === sp) {
        x.delete = e.target.checked;
      }
      return x;
    });
    setData(arr2);
  };

  return (
    <div className="App">
      <ul>
        {Data.map((x, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                id={`chk_${x.name}`}
                onChange={chkHandler}
              />
              {x.name}
              {x.delete && (
                <input
                  //disabled={x.delete}
                  type="button"
                  value="delete"
                  id={`del_${x.name}`}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
