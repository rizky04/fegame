import React from "react";
interface inputProps {
  label: string,
  placeholder: string,
}
export default function Input(props: inputProps) {
  const { label, placeholder, ...nativeProps } = props;
  return (
    <>
      <label className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
