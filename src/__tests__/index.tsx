import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import IndexPage from '../pages/index'

it('renders the page', () => {
  const { getByText } = render(<IndexPage />)
  expect(getByText('Hello, my name is Travis.')).toBeInTheDocument()
})
