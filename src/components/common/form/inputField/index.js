import React from "react";

const InputField = ({ placeholder, name, onChange, type, value, style }) => (
    <input
        type={type || "text"}
        value={value || ""}
        placeholder={placeholder || ""}
        onChange={onChange || (() => { })}
        name={name}
        style={style}
    />
);

export default InputField;