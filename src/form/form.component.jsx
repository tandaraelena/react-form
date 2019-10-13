import React from 'react'
import { StyledForm } from './form.style'
import data from '../data'

const Form = () => {
  const { questions } = data;
  console.log(questions)

  return (
    <StyledForm width={50}>
      {data && questions.map(({ title, fields }) => 
        <div>
          <h2 key={title}>{title}</h2>
          {fields.map(({ name, label, type }) =>
            (type !== 'dropdown' ? 
            <div key={name}>
              <label >{label}</label>
              <input type={type} />
            </div> :
            <div key={name}>
              <label >{label}</label>
              <select />
            </div>)
          )}
        </div>
      )}

    </StyledForm>
  )
}

export default Form
