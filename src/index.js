import { render } from 'react-dom'
import React from 'react'
import App from './components/app'

const whereAppRenders = document.getElementById('where-app-renders')

render(
  <App />,
  whereAppRenders
)