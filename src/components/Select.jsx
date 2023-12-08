import React from 'react'
import { classNames } from '../utils/utils'

const Select = ({ options, onSelect, value, placeholder, label, className, error, textSize }) => {
  return (
    <div>
      <label className='text-white'>
        {label}
      </label>
      <select className={
        classNames(
          className,
          'bg-white z-10 border focus:ring-1 focus:ring-accent-500 focus:border-accent-500 placeholder-secondary-300 block w-full border-misc-300 rounded disabled:opacity-50 disabled:cursor-not-allowed',
          error && 'block w-full text-danger-500 border-danger-500 placeholder-danger-500 focus-visible:outline-none focus:ring-1 focus:ring-danger-500 focus:border-danger-500',
          textSize,
        )
      } onChange={e => {
        onSelect(e.target.value)
      }}>
        {options && options.map((item) => {
          return (<option value={item.key} > {item.label}</option>)
        })}
      </select>
    </div>
  )
}

export default Select;