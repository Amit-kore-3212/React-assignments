import React, { useState } from 'react'
import { ProductList } from './ShoppingCart/DisplayProducts/ProductList'
import {products} from './ShoppingCart/Products/Products'



// import { Login } from './Components/Login'
// import {Todo} from './Components/Todo'

function App(){







    return(
     <div>
     {/* <Route path="/" component={Login} exact={true}/>
       <Route path="/todo" component={Todo} /> */}
       <ProductList products={products} />
      
       </div>
       
        
 
     
 
    )
}
export default App