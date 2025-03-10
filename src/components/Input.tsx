import React from "react";

type InputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div>
      <label className="block text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-[var(--color-fitness)]"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
