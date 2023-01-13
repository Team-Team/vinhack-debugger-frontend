import CodePane from "../Components/CodePane/CodePane";
import Navbar from "../Components/Navbar/Navbar";
import Player from "../Components/Player/Player";
import { SetTheme } from "../Contexts/ThemeContext";
const Home = () => {
  const { theme } = SetTheme();
  const { primaryColor } = theme;
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar primaryColor={primaryColor} />
      <div className="flex w-full h-full">
        <div className="w-1/2">
          <CodePane
            // code={
            //   "print('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')\nprint('Hello World')"
            // }
            primaryColor={primaryColor}
          />
        </div>
        <div className="w-1/2">
          <Player primaryColor={primaryColor} />
        </div>
      </div>
    </div>
  );
};

export default Home;
