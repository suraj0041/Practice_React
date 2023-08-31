// useReducer()
import { useEffect, useReducer, useState } from "react";

const inputReducer = (state, action) => {
  if (action.type === "case1") {
    return {
      ValueFN: action.val,
      isValidFN: action.val.length > 6 ? true : false,
      ValuePS: state.ValuePS,
      isValidPS: state.isValidPS
    };
  }
  if (action.type === "case2") {
    return {
      ValueFN: state.ValueFN,
      isValidFN: state.isValidFN,
      ValuePS: action.val,
      isValidPS: action.val.length > 6 ? true : false
    };
  }
  return { ValueFN: "", isValidFN: false, ValuePS: "", isValidPS: false };
};

export default function Q4() {
  const [isUpdate, setisUpdate] = useState("");
  const [inpState, inpDispatch] = useReducer(inputReducer, {
    ValueFN: "",
    isValidFN: false,
    ValuePS: "",
    isValidPS: false
  });
  const { isValidFN: ValidNF } = inpState;
  const { isValidPS: ValidPS } = inpState;
  useEffect(() => {
    console.log(new Date().toString());
    if (ValidNF && ValidPS) {
      setisUpdate(new Date().toString());
    } else {
      setisUpdate("");
    }
  }, [ValidNF, ValidPS]);

  const input1Handler = (event) => {
    //setInpValue(event.target.value);
    inpDispatch({ type: "case1", val: event.target.value });
  };
  const input2Handler = (event) => {
    //setInpValue(event.target.value);
    inpDispatch({ type: "case2", val: event.target.value });
  };
  return (
    <>
      <div>
        <input onChange={input1Handler} />
      </div>
      <div>
        <label>{inpState.ValueFN}</label>
      </div>
      <div>
        <label>{inpState.isValidFN ? "true" : "false"}</label>
      </div>
      <hr />
      <div>
        <input onChange={input2Handler} />
      </div>
      <div>
        <label>{inpState.ValuePS}</label>
      </div>
      <div>
        <label>{inpState.isValidPS ? "true" : "false"}</label>
      </div>
      <hr />

      <div>
        <label>{isUpdate}</label>
      </div>
    </>
  );
}
