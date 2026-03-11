import React from "react";

export const InputField = ({ name, type = "text", placeholder, value, onChange, children }) => {
  const Component = type === "textarea" ? "textarea" : "input";

  return (
    <div className="w-full mb-4">
      {children && (
        <label htmlFor={name} className="block mb-2 font-semibold text-[var(--text-primary)]">
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
        className="w-full px-4 py-3 rounded-3xl border border-gray-300 bg-[var(--bg-secondary)]
                   text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      />
    </div>
  );
};