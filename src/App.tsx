import React, { useState } from 'react'
// import { ProductList } from './ShoppingCart/DisplayProducts/ProductList'
// import {products} from './ShoppingCart/Products/Products'
import {BrowserRouter , Route} from 'react-router-dom'


import { Login } from './Todo/Login'
import {Todo} from './Todo/Todo'

function App(){







    return(
      <BrowserRouter>
       <div>
     <Route path="/" component={Login} exact={true}/>
       <Route path="/todo" component={Todo} />
       {/* <ProductList products={products} /> */}
      
       </div>
       
      
      
      </BrowserRouter>
    
        
 
     
 
    )
}
export default App