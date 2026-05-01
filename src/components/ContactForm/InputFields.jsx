import React from "react";

export const InputField = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  children
}) => {
  const Component = type === "textarea" ? "textarea" : "input";

  return (
    <div className="w-full">
      {children && (
        <label
          htmlFor={name}
          className="block mb-2 font-semibold text-gray-700"
        >
          {children}
        </label>
      )}

      <Component
        id={name}
        name={name}
        type={type === "textarea" ? undefined : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        rows={type === "textarea" ? 6 : undefined}
        className="w-full px-4 py-3 text-gray-900 transition bg-white border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};