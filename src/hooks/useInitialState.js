import { useState } from "react";

const initialState = {
  user: []
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setUserData = (data) => {
    setState(data);
  };

  return {
    state,
    setUserData
  };
};

export default useInitialState;
