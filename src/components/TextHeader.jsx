import React from "react";

const TextHeader = ({ title }) => {
  return (
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50"
    >
      {title}
    </h5>
  )
}

export default TextHeader;