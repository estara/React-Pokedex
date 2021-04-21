import { useState } from 'react';
import axios from "axios";

const useFlip = (startState = false) => {
    const [isFacingUp, setIsFacingUp] = useState(startState);

    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
        };
    return [isFacingUp, flipCard];
};


function useAxios (url) {
    const [response, setResponse] = useState([]);
  
      async function getData(urlOptions = '') {
        const res = await axios.get(`${url}${urlOptions}`);
        const data = res.data
        setResponse([...response, data]);
      };
  
    return [response, getData];
};
  
export { useAxios, useFlip };