import { UserAction } from "../context/Q5_Redux";
import { useDispatch, useSelector } from "react-redux";

export default function Q5_form() {
  const isValid = useSelector((state) => state.userlogin.isValid);
  const dispatch = useDispatch();
  let timerID = 0;

  const OnChangeUserName = (e) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      console.log(e.target.value);
      dispatch(UserAction.setUsername(e.target.value));
    }, 500);
  };
  const OnChangePassword = (e) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      console.log(e.target.value);
      dispatch(UserAction.setPassword(e.target.value));
    }, 500);
  };
  const OnChangeConfirmPassword = (e) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      console.log(e.target.value);
      dispatch(UserAction.setConfirmPassword(e.target.value));
    }, 500);
  };
  const OnSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(UserAction.setIsValid());
  };
  return (
    <>
      <div>
        <form onSubmit={OnSubmitHandler}>
          <div>
            <label>username</label>
            <input type="text" onChange={OnChangeUserName} />
          </div>
          <div>
            <label>password</label>
            <input type="password" onChange={OnChangePassword} />
          </div>
          <div>
            <label>confirm password</label>
            <input type="password" onChange={OnChangeConfirmPassword} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          {isValid ? "true" : "false"}
        </form>
      </div>
    </>
  );
}
