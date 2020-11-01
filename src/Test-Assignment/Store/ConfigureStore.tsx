import React from 'react'
import {createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import postReducer from '../Reducer/postReducer'



const configureStore = () =>{
    const store = createStore(combineReducers({
        posts:postReducer

    }),applyMiddleware(thunk))


  

    return store
}
export type  RootState = ReturnType<typeof configureStore>
export default configureStore