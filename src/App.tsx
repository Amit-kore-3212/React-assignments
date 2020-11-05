import React  from 'react'
import {useState} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import { ProductList } from './ShoppingCart/DisplayProducts'
import { products } from './ShoppingCart/Products/Products'
import { Title ,  Home } from './Test-Assignment/Components'
import  Data from './Test-Assignment/Components/Data//Data'
import { Login , Todo } from './Todo'
// import { Login , Todo} from './Todo'

export const DataContext = React.createContext<any[]>([])

function App(){


 
    return(
      <BrowserRouter>
    
 <div>
        {/* <Route path="/" component={Login} exact={true}/>
       <Route path="/todo" component={Todo} /> */}
       {/* <ProductList products={products} /> */}
       {/* <Home/> */}
        
   {/* <Route path="/" component={ Title } exact={true}/>
   <Route path="/posts" component={Data}/> */}

   {/* <Route path="/" component={Login} exact={true}/> */}
   {/* <ProductList products={products} /> */}
   <Route path="/" component={Login} exact={true}/>
   <Route path="/todo" component={Todo}/>

   
       

      

    
    
   
 
      
       </div>
         
      </BrowserRouter>
   
 
       
        
 
     
 
    )
}
export default App