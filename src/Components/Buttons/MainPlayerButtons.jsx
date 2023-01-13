import scrollToDiv from "../../HelperFunctions/scrollToDiv";

const MainPlayerButtons = ({ index, active, item, setActive }) => {
  return (
    <button
      key={index}
      id={`button-${index}`}
      className={`whitespace-nowrap p-2 min-2-full transition duration-300 rounded-md hover:text-black hover:bg-gray-300 ${
        active === item ? "text-black bg-gray-300" : "bg-gray-800 text-white"
      } font-semibold`}
      onClick={() => {
        setActive(item);
        scrollToDiv(index);
      }}
    >
      {item.name}
    </button>
  );
};

export default MainPlayerButtons;
