import styled from 'styled-components'

export const StyledForm = styled.form`
  background-color: #426EB8;
  width: ${({ width }) => width}%;
  grid-column: 2/3;
  border-radius: 5px;
  text-align:center;
  color: white;
  box-shadow: 0px 5px 25px 11px rgba(0,0,0,0.75);

  > button {
    border-radius: 5px;
    background-color: #2251A0;
    border: none;
    color: white;
    padding: 2px 5px;
    margin: 10px 2px;
  }
`
export const StyledInputField = styled.div`
  padding: 5px 10px;
  > input {
    border-radius: 5px;
  }
`
export const StyledSelectField = styled(StyledInputField)`
  > select {
    border-radius: 5px;
  }
`