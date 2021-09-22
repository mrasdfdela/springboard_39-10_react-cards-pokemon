import { useState } from "react";
import axios from "axios";

function useAxios() {
  const [ data, setData ] = useState(null);
  const getCardData = async (url) => {
    await axios.get(url).then((r) => setData(r));
  };
  return [data, getCardData];
}

export default useAxios;