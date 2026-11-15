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
          className="mb-2 block font-semibold text-slate-200"
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
        rows={type === "textarea" ? 4 : undefined}
        className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 shadow-sm transition placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      />
    </div>
  );
};
