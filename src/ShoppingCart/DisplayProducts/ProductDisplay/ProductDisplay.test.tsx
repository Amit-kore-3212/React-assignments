import React from 'react'
import { render } from '@testing-library/react'

import {DisplayProducts } from './ProductDisplay'
import userEvent from '@testing-library/user-event'

describe('rendering',()=>{
    test('Render',()=>{
        render(<DisplayProducts id={3} price={20000} rating={4.5} name={'lenovo'} description={'Product is really good'} addToCart={()=>{}} handleQuantity={()=>{}} />)
    })
    test( ' input value must be equal to rating',()=>{
        const {  getByTestId } = render(<DisplayProducts id={3} price={20000} rating={4.5} name={'lenovo'} description={'Product is really good'} addToCart={()=>{}} handleQuantity={()=>{}} /> )
        expect(getByTestId('rating').innerHTML).toEqual("")
    })
    test(' verify the initial on change',()=>{
        const onRatingChange = jest.fn()
        const {  getByTestId } = render(<DisplayProducts id={3} price={20000} rating={4.5} name={'lenovo'} description={'Product is really good'} addToCart={()=>{}} handleQuantity={onRatingChange} />)
       expect(onRatingChange).not.toBeCalled()
    })
    test('validate the on change event',()=>{
        const onRatingChanged = jest.fn()
        const { getByTestId } = render(<DisplayProducts id={3} price={20000} rating={4.5} name={'lenovo'} description={'Product is really good'} addToCart={()=>{}} handleQuantity={onRatingChanged} />)
        userEvent.type(getByTestId('rating'), '2' , {allAtOnce:true})
        expect(onRatingChanged).toBeCalledWith({quantity:'2'})
        
    })
    test('validate how many times it is called ',()=>{
        const onRateChange = jest.fn()
        const { getByTestId } = render(<DisplayProducts id={3} price={20000} rating={4.5} name={'lenovo'} description={'Product is really good'} addToCart={()=>{}} handleQuantity={onRateChange} />)
        userEvent.type(getByTestId('rating'), 'hi' , {allAtOnce:true})
        expect(onRateChange).toBeCalledTimes(1)
    })

    })
 