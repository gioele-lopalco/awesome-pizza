import { ReactElement } from "react";

export const InputLabel = ({ textLabel, handleChange,inputValue, inputName, isExtra = false }: IInputLabel): ReactElement => {
  return (
    <div className='label'>
      <span>{textLabel}</span>
      {isExtra
        ? <input type="text" name={inputName} value={inputValue} onChange={handleChange} />
        : <input type="text" name={inputName} value={inputValue} onChange={handleChange} required />
      }
    </div>
  )
}