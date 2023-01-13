import { SetTheme } from "../../Contexts/ThemeContext";
import {
  atomOneDarkReasonable,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const themes = {
  dark: atomOneDarkReasonable,
  light: atomOneLight,
};

const Navbar = () => {
  const { theme, setTheme } = SetTheme();
  // console.log(SetTheme);
  return (
    <div className="flex px-5 py-3 bg-secondary justify-between text-textPrimary">
      <div>Icon</div>
      <div>
        <h1>Visual Debugger</h1>
      </div>
      <div>
        <select
          defaultValue="dark"
          onChange={(e) => setTheme(themes[e.target.value])}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
