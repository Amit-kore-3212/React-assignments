import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Home } from './HomePage'

describe('Rendering',()=>{
test('Render',()=>{
    render(<Home/>)
})
test('Data Presesnt',()=>{
    const { getByTestId} = render(<Home/>)
    expect(getByTestId('message')).toBeInTheDocument()
})

})