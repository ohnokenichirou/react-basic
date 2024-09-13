import React, { useState } from "react";

export const TextInput = () => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  return <input type="text" onChange={(e) => handleName(e)} value={name} />;
};
