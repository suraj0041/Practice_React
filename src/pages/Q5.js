import { Provider } from "react-redux";
import Q5_Counter from "../components/Q5_Counter";
import Q5_form from "../components/Q5_form";
import store from "../context/Q5_Redux";
export default function Q5() {
  return (
    <>
      <Provider store={store}>
        store 1
        <Q5_Counter />
        <hr />
        store 2
        <Q5_form />
      </Provider>
    </>
  );
}
