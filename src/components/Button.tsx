import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  isLoading,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`px-6 py-3 bg-[var(--color-fitness)] text-black rounded-full shadow-md hover:bg-[var(--color-fitness-hover)] cursor-pointer transition-shadow duration-300 disabled:opacity-50 ${className}`}
    >
      {isLoading ? "Chargement..." : text}
    </button>
  );
};

export default Button;
