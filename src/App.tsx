import React  from 'react'
import {useState} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import  Data  from './Test-Assignment/Components/Data'
import { Home } from './Test-Assignment/Components/HomePage'
import { Title } from './Test-Assignment/Components/Posts'
// import { ProductList } from './ShoppingCart/DisplayProducts/ProductList'
// import {products} from './ShoppingCart/Products/Products'






// import { Login } from './Components/Login'
// import {Todo} from './Components/Todo'

export const DataContext = React.createContext<any[]>([])

function App(){
const [data , setData] = useState<any[]>([])

  const addData =(formData:any)=>{
     setData(prevState => prevState.concat(formData))


  }
    return(
      <BrowserRouter>
    
 <div>
        {/* <Route path="/" component={Login} exact={true}/>
       <Route path="/todo" component={Todo} /> */}
       {/* <ProductList products={products} /> */}
       <Home/>
        
   <Route path="/" component={ Title } exact={true}/>
   <Route path="/posts" component={Data}/>
       

      

    
    
   
 
      
       </div>
         
      </BrowserRouter>
   
 
       
        
 
     
 
    )
}
export default App