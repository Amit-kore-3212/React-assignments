import React  from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
// import { ProductList } from './ShoppingCart/DisplayProducts/ProductList'
// import {products} from './ShoppingCart/Products/Products'
import { Title } from './Test-Assignment/Title'




// import { Login } from './Components/Login'
// import {Todo} from './Components/Todo'

function App(){




    return(
      <BrowserRouter>
      
    
     <div>
     {/* <Route path="/" component={Login} exact={true}/>
       <Route path="/todo" component={Todo} /> */}
       {/* <ProductList products={products} /> */}
       <Route path="/" component={Title}/>
      
       </div>
       </BrowserRouter>
       
        
 
     
 
    )
}
export default App