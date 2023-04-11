import { useEffect, useState } from "react";
import axios from "axios";

const UseApi = (url) => {

  const [apiState, setApiState] = useState({
    data: [],
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    async function fetching() {
      try {
        setApiState({ ...apiState, isLoading: true });

        const response = await axios(url);
        setApiState({ ...apiState, isLoading: false, data: response.data });
      } catch (err) {
        setApiState({ ...apiState, isLoading: false, error: err });
      }
    }

    fetching();
  }, [url]);

  const { data, error, isLoading } = apiState;

  return { data, error, isLoading };
};

export default UseApi;
