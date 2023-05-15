import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useFlip = (initialState) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
};

const useAxios = (url) => {
  const [state, setState] = useState([]);
  const addCard = async () => {
    const response = await axios.get(url);
    setState((state) => [...state, { ...response.data, id: uuid() }]);
  };
  return [state, addCard];
};

export { useFlip, useAxios };
