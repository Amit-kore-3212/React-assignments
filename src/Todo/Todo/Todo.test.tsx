import React from 'react'
import { render } from '@testing-library/react'
import {Todo} from './Todo'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'


describe('To Check Rendering',()=>{

    test('renderElement',  ()=>{
        render(<Todo handleTodos={()=>{}}   />)
    })

    test ( "Hello word ",  ()=>{
        const { getByTestId } =  render(<Todo handleTodos={()=>{}}/>)
        expect(getByTestId('Hello')).toBeInTheDocument();
    })
    test ( " todo is empty initially", async ()=>{
        const { getByTestId } =   render(<Todo   handleTodos={()=>{}}  />)
        expect(getByTestId('todo').innerHTML).toEqual("")
    })
      
    test('rendering onchange event', ()=>{
        const onTodoChange = jest.fn()
        const { getByTestId } = render(<Todo handleTodos={onTodoChange}/>)
        userEvent.type(getByTestId('todo'), 'react-jest' ,{allAtOnce:true})
        expect(onTodoChange).toBeCalledWith({todos:'react-jest'})
    })

})