import React from "react";

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="mt-6 px-6 py-3 bg-[var(--color-fitness)] shadow-lg hover:bg-[var(--color-fitness-hover)] text-black cursor-pointer rounded-full">
      {text}
    </button>
  );
};

export default Button;
