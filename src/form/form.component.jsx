import React, { useState } from 'react'
import { StyledForm } from './form.style'
import data from '../data'

const Form = () => {
  const { questions } = data;

  const [inputValue, setInputValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    street_address: '',
    post_code: '',
  })

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputValue)
  }

  const handleInputChange = (evt) => {
    setInputValue({
      ...inputValue,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <StyledForm width={50} onSubmit={handleFormSubmit}>
      {data && questions.map(({ title, fields }) => 
        <div key={title}>
          <h2>{title}</h2>
          {fields.map(({ name, label, type }) =>
            (type !== 'dropdown' ? 
            <div key={name}>
              <label>{label}</label>
              <input 
                name={name}
                onChange={handleInputChange} 
                value={inputValue[name]} 
                type={type} 
              />
            </div> :
            <div key={name}>
              <label >{label}</label>
              <select />
            </div>)
          )}
        </div>
      )}
      <button type='submit'>Submit</button>
    </StyledForm>
  )
}

export default Form
