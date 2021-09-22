import { useState } from "react";

function useFlip() {
  const [ facingUp, setFacingUp ] = useState(true);
  const flipCard = ()=> {
    setFacingUp((facingUp) => !facingUp);
  }
  return [facingUp, flipCard];
}

export default useFlip;