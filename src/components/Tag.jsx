import React from "react";
import "./Tag.css";
const Tag = ({ selected, name, selectTag }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JS: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    DEFAULT: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      style={selected ? tagStyle[name] : tagStyle.DEFAULT}
      type="button"
      className="tag"
      onClick={() => selectTag(name)}
    >
      {name}
    </button>
  );
};

export default Tag;
