import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  success,
}) => {
  return (
    <div className="form-group" style={{ marginBottom: "50px" }}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
          "is-valid": success,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  success: PropTypes.bool,
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
