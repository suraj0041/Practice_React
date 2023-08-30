import { Provider } from "react-redux";
import Q5_Counter from "./Q5_Counter";
import store from "./Q5_Redux";
export default function Q5() {
  return (
    <>
      <Provider store={store}>
        <Q5_Counter />
      </Provider>
    </>
  );
}
