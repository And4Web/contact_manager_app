import React from 'react';
import PropTypes from 'prop-types';


function TextInputGroup({name, label, type, placeholder, value, onChange}) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="ms-1 mb-2 ">{label}</label>
      <input type={type} name={name} className="form-control form-control-lg" placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text'
}

//exported as default so while importing curly brackets are not required.
export default TextInputGroup;