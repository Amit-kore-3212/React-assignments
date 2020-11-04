import React from 'react'

import {  render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


import { Login } from './Login'
import userEvent from '@testing-library/user-event'


describe('Login component Testing', ()=>{
    test('rendering',()=>{
        render(<Login  onChange={() => {}} />)
    })


 test('Username', async ()=>{
     const { getByTestId } = render(<Login  onChange={ ()=>{} }/>)
 expect( getByTestId('username').innerHTML).toEqual("") 
 })


test('password check', async ()=>{
    const { getByTestId } = render(<Login    onChange={() => {}}/>)
    expect(getByTestId('password').innerHTML).toEqual("")
    
});


test('when username changes', async ()=>{
    const onUserNameChange = jest.fn()
    const { getByTestId } = render(<Login  onChange={onUserNameChange} />)
 userEvent.type(getByTestId('username'), 'test' , {allAtOnce:true})
 expect(onUserNameChange).toBeCalledWith({username:"test",password:''})
});

test("To check on change event ",()=>{
    const onUserChange = jest.fn()
const { getByTestId } = render(<Login  onChange={onUserChange}   />)
userEvent.type(getByTestId('password'),'value' , { allAtOnce:true})
expect(onUserChange).toBeCalledWith({password:'value',username:''})

})

test("To check username is present or not",()=>{
    const { getByTestId } = render(<Login  onChange={()=>{}}/>  )
    expect(getByTestId('user')).toBeInTheDocument();
})






})