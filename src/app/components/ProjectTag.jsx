import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-foreground border-primary-500"
    : "text-muted-foreground border-border hover:border-foreground";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
