import React, { useState, useEffect } from "react";

const useFlip = (initialState) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
};

export default useFlip;
