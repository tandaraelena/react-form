import React, { useState } from 'react'
import { StyledForm, StyledInputField, StyledSelectField } from './form.style'
import data from '../config'

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  street_address: '',
  post_code: '',
}

const Form = () => {
  const { questions } = data;

  const [inputValue, setInputValue] = useState(initialState)

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputValue)
  }

  const handleInputChange = ({ target: {name, value} }) => {
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  return (
    <StyledForm width={50} onSubmit={handleFormSubmit}>
      {data && questions.map(({ title, fields }) => 
        <div key={title}>
          <h2>{title}</h2>
          {fields.map(({ name, label, type, options }) =>
            (type !== 'dropdown' ? 
            <StyledInputField key={name}>
              <label>{label}</label>
              <input 
                name={name}
                onChange={handleInputChange} 
                value={inputValue[name]} 
                type={type} 
              />
            </StyledInputField> :
            <StyledSelectField key={name}>
              <label >{label}</label>
              <select 
                name={name}
                type={type}
              >
                  {options.map(o => 
                  <option 
                    key={o}
                  >{o}</option>)}
              </select>
            </StyledSelectField>)
          )}
        </div>
      )}
      <button type='submit' >Submit</button>
    </StyledForm>
  )
}

export default Form
