import React, { useState } from 'react'
import { DisplayProducts } from './ProductDisplay'
import {Cart} from './Cart'
import '../../App.css'
import styled from 'styled-components'

const Header = styled.div`
background-color : #ddd;
width : 100%;
height:30px;
border-radius:5px;
`

const Head = styled.div`
background-color:red;
`
const Info = styled.div`
border: 1px solid gray;
    width: 200px;
    height: 300px;
    float: left;
    margin-left: 10px;
    text-align: center;
    border-radius: 5px;

`

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
   
    const addToCart =(name:string,rating:number,price:number,quantity:number)=>{
        setCart(prevState => prevState.concat({name,rating,price}))
        setQuantity(quantity)

    }
    
    return(
        

      
        <div>
            <Header>
                
            </Header>
            <div>
            {
                props.products.map((ele:any)=>{
                    return(
                        <Info key={ele.id}>
                            <DisplayProducts id={ele.id} description={ele.description} rating={ele.rating} price={ele.price} name={ele.name} addToCart={addToCart} />
                           
                           
                           <Cart productInfo={cart} quantity={quantity}/>
                            </Info>
                    )
                })
            }
            </div>

        </div>
    )
}