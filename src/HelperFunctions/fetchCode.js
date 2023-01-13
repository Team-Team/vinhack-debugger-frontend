import axios from "axios";

const baseUrl = "http://localhost:5000/";

const fetchCode = async () => {
  try {
    const response = await axios.get(baseUrl + "source");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchLine = async () => {
  try {
    const response = await axios.get(baseUrl + "next");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchCode, fetchLine };
