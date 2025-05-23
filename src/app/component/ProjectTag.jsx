import React from "react";

const ProjectTag = ({ name, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-4 py-2 rounded-full font-medium border
        ${isSelected ? "bg-gray-300" : "bg-white"}
        `}
      style={{ color: "black" }} // Force text color black
    >
      {name}
    </button>
  );
};

export default ProjectTag;
