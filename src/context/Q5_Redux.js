import { createSlice, configureStore, createStore } from "@reduxjs/toolkit";
let DefaultcounterState = {
  counter: 2,
  toggle: false
};
//------------------------------------------------------------------
//With only redux
//has some podention issue -

// const counterReducer = (state = DefaultcounterState, action) => {
//   debugger;
//   if (action.type === "increment") return { counter: state.counter + 1 };
//   if (action.type === "increase")
//     return { counter: state.counter + action.amount };
//   else if (action.type === "decrement") return { counter: state.counter - 1 };
//   return { counter: state.counter };
// };

//const store = createStore(counterReducer);

//--------------------------------------------------------------
// with @reduxjs/toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: DefaultcounterState,
  reducers: {
    incrementSlice(state) {
      state.counter++;
    },
    increaseSlice(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementSlice(state) {
      state.counter--;
    },
    toggleCounterSlice(state) {
      state.toggle = !state.toggle;
    }
  }
});
//--------------------------------------------------------------
let DefaultUserState = {
  username: "",
  password: "",
  confirmpassword: "",
  isValid: false
};
const userSlice = createSlice({
  name: "user",
  initialState: DefaultUserState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setConfirmPassword(state, action) {
      state.confirmpassword = action.payload;
    },
    setIsValid(state) {
      debugger;
      state.isValid = state.password === state.confirmpassword;
    }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, userlogin: userSlice.reducer }
});

export const CounterAction = counterSlice.actions;
export const UserAction = userSlice.actions;

export default store;
