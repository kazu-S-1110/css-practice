import React from "react";
import Select from "react-select";

export const ReactSelect = () => {
  const options = [
    { label: "JavaScript", value: 1 },
    { label: "TypeScript", value: 2 },
    { label: "ECMAScript", value: 3 },
    { label: "Java", value: 4 },
    { label: "JScript", value: 5 },
  ];
  return (
    <>
      <Select options={options} />
    </>
  );
};
