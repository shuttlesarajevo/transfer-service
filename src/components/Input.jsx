import React from 'react'
import { classNames } from '../utils/utils';

export const Input = ({ label, type, placeholder, onChange, error, name, className, textSize, defaultValue, ariaDescribedby, disabled, ariaLabel, value }) => {
  return (
    <div>
      <label className='text-white'>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={
          classNames(
            className,
            'bg-white z-10 border focus:ring-1 focus:ring-accent-500 focus:border-accent-500 placeholder-secondary-300 block w-full border-misc-300 rounded disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'block w-full text-danger-500 border-danger-500 placeholder-danger-500 focus-visible:outline-none focus:ring-1 focus:ring-danger-500 focus:border-danger-500',
            textSize,
          )
        }
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-describedby={
          (ariaDescribedby && ariaDescribedby.join(' ')) || undefined
        }
        disabled={disabled}
        aria-invalid={!!error && 'true'}
        aria-label={ariaLabel || undefined}
        value={value}
        onChange={onChange}
      />
      {error && <p>error</p>}
    </div>
  )
}

export default Input;