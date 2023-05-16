import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useFlip = (initialState) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
};

const useAxios = (key, url) => {
  const [state, setState] = useLocalStorage(key);
  const addCard = async (formatter = (data) => data, restOfUrl = "") => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setState((state) => [...state, { ...response.data, id: uuid() }]);
  };
  const clearCards = () => setState([]);
  return [state, addCard, clearCards];
};

function useLocalStorage(key, initialValue = []) {
  if (localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key));
  }
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}

export { useFlip, useAxios, useLocalStorage };
