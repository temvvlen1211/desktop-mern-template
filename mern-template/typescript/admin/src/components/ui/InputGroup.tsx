import { nanoid } from "nanoid";
import { FC } from "react";

interface InputGroupProps {
  label?: string;
  type: "text" | "tel" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: any) => void;
}

export const InputGroup: FC<InputGroupProps> = ({
  label = "",
  type = "text",
  placeholder = "",
  required = false,
  value = "",
  onChange,
}) => (
  <div>
    <label className="">
      <span className="text-sm font-medium text-gray-900 dark:text-white block mb-2">
        {label}
      </span>
      <input
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        defaultValue={value}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
      />
    </label>
  </div>
);
