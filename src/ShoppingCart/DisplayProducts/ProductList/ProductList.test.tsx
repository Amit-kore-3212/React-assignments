import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {ProductList } from './ProductList'

describe("rendering correctly",()=>{
    test("Renders",()=>{
        render(<ProductList products={[]}  />)
    })
    test('renders with all the props',()=>{
        render(<ProductList  products={[{id:1 , name:'Lenovo',rating:5 , description:'The product is good',price:30000}]} />)
    })
    test('Shouldbe Present',()=>{
        const { getByTestId } =  render(<ProductList  products={[]}/>) 
        expect(getByTestId('head')).toBeInTheDocument()
    })
    
})