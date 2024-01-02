import React from 'react';
import PropTypes from 'prop-types';
import "./textInput.css"

/**
 * TextInput
 * @param {string} label - The label of the input.
 * @param {string} type - The type of the input (text, password,...).
 * @param {string} name - The name of the input.
 * @param {string} value - The value of the input
 * @param {function(string):void} onChange - The function to call when the input value changes. Receives the new value as an argument.
 * @param {string} errorMessage -This attributes can be used to display an error message below the input
 */

function TextInput({ label, type, name, value, onChange, errorMessage }) {
    return (
        <div className='text-input'>
            <label className='text-input__label'>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
            />
            <small className="text-input__error">{errorMessage}</small>

        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

TextInput.defaultProps = {
    type: 'text',
    value: ''
};

export default TextInput;
