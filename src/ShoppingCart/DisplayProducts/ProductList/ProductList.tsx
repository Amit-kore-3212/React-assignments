import React, { useState } from 'react'
import { DisplayProducts } from '../ProductDisplay/ProductDisplay'
import {Cart} from '../Cart/Cart'
import {Head, Header ,Info} from '../../StyledComponents/stylecomponent'





interface Products{
    id:number,
    name:string,
    rating:number,
    description:string,
    price:number

}

interface Props{
    products:Products[]

    
    
}

 export const ProductList:React.FC<Props>=(props:Props)=>{

    const [cart , setCart] = useState<any[]>([])
    const [quantity , setQuantity] = useState<number>(1)
   
    const addToCart =(name:string,rating:number,price:number,id:number,quantity:number)=>{
        setCart(prevState => prevState.concat({name,rating,price,id}))
        // setCart([...cart,{name,rating,price,id}])
        setQuantity(quantity)

    }
    
    return(
      
        <div>
          
            <Header >
            <Head  data-testid="head">Welcome to Laptop Gallery - Choose Your favourite One</Head>
               
                
            </Header>
            <br/>
            <div>
            {
               props.products &&  props.products.map((ele:any)=>{
                    return(
                        <Info key={ele.id}>
                            <DisplayProducts id={ele.id} description={ele.description} rating={ele.rating} price={ele.price} name={ele.name} addToCart={addToCart} />
                           
                           
                           <Cart productInfo={cart} quantity={quantity}  />
                            </Info>
                    )
                })
            }
        
            </div>

        </div>
    )
}