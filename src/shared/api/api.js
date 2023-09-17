import axios from "axios";

axios.defaults.baseURL = "https://6500972018c34dee0cd5279c.mockapi.io";

export const getCar = async () => {
  const car = await axios.get(`/adverts`);
  return car.data;
};
