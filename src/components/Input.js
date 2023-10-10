import React from 'react'

const Input = (props) => {
  return (
    <div className={props.emailClasses}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          onChange={props.onEmailInputChange}
          value={props.emailInput}
          onBlur={props.onEmailInputBlur}
        />
        {props.emailInputIsInvalid && (
          <p className="error-text">{props.errorText}</p>
        )}
      </div>
  )
}

export default Input