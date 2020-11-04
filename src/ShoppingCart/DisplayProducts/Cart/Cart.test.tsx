import React from 'react'
import { render } from '@testing-library/react'
import { Cart } from './Cart'
import 'jest-styled-components/native'

describe('Render',()=>{

    test('renders',()=>{
        render(<Cart productInfo={[]} quantity={6} />)
    })
})