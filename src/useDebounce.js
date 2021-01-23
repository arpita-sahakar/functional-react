import React, { useState } from "react";

function useDebounce(inpVal, delay) {
  const [value, setValue] = useState(inpVal);

  const handleChange = (currentVal) => {
    setTimeout(() => {
      if (value === currentVal) {
        setValue(currentVal);
      }
    }, delay);
  };
  return [value, handleChange];
}

export default useDebounce;
