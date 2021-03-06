import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

function useAxios() {
  const [ data, setData ] = useState([]);

  const addData = async (url) => {
    await axios.get(url)
    .then( (resp) => {
      setData( data => [...data, {...resp.data, id:uuid()} ] );
    });
  };

  const removeData = ()=>{
    setData([]);
  }
  return [data, addData, removeData];
}

export default useAxios;