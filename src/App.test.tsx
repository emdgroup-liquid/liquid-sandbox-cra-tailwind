import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', async () => {
  render(<App />)
  const heading = screen.getByText('Liquid Sandbox App')
  expect(heading).toBeInTheDocument()
})
