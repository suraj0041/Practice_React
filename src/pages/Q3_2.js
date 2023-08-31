import { useContext } from "react";
import { ThemContext, ThemUpdatecontext } from "../context/Q3_1";

export default function Q3_2() {
  const themecontext = useContext(ThemContext);
  const themUpdatecontext = useContext(ThemUpdatecontext);

  console.log(`sd${themecontext}`);
  return (
    <>
      <button onClick={themUpdatecontext}>Change theme</button>
    </>
  );
}
