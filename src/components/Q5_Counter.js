import { useSelector, useDispatch } from "react-redux";
import { CounterAction } from "../context/Q5_Redux";

export default function Q5_Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  const toggle = useSelector((state) => {
    return state.counter.toggle;
  });
  const toggalCouner = () => {
    dispatch(CounterAction.toggleCounterSlice());
  };
  const IncrementCouner = () => {
    //dispatch({ type: "increment" });
    dispatch(CounterAction.incrementSlice());
  };
  const DecrementCouner = () => {
    dispatch(CounterAction.decrementSlice());
  };
  const IncreaseCouner = () => {
    dispatch(CounterAction.increaseSlice(5));
  };
  return (
    <>
      <div>
        {counter}
        {toggle ? "true" : "false"}
      </div>
      <button onClick={IncrementCouner}>+ count</button>

      <button onClick={DecrementCouner}>- count</button>

      <button onClick={IncreaseCouner}>5 count</button>

      <button onClick={toggalCouner}>Toggal count</button>
    </>
  );
}
