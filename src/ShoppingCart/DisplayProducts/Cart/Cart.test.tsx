import React from 'react'
import { render } from '@testing-library/react'
import { Cart } from './Cart'
import 'jest-styled-components/native'
import '@testing-library/jest-dom/extend-expect'


describe('Render',()=>{

    test('renders',()=>{
        render(<Cart productInfo={[]} quantity={6} />)
    })
    test('Rendering with name',()=>{
        const { getByTestId } = render(<Cart productInfo={[]} quantity={5}  />)
        expect(getByTestId('items')).toBeInTheDocument()
    })
    test('rendering with all props',()=>{
        render(<Cart productInfo={[{id:1 , name:'lenovo' ,price:25000, rating:4.5 , description:'product is good'}]} quantity={6} />)
    })
   
})