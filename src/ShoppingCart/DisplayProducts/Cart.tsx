import React, { useEffect, useState } from 'react'
import {CartInfo , Span, Remove , Carts , ProductName, Rating, Price ,P} from '../StyledComponents/stylecomponent'


interface Props {
    productInfo:any[],
    quantity:number
}




export const Cart:React.FC<Props> =(props:Props)=>{
    const [ cartInfo , setCartInfo] = useState<any[]>([])
    const [cart , setCart] =useState<boolean>(false)
    const handleCart=()=>{
        setCart(prevState => !prevState)
        
    }
    useEffect(()=>{
        setCartInfo(props.productInfo)

    },[props])
  

const removeItem=(name:string)=>{
    setCartInfo(cartInfo.filter(ele => ele.name !== name))
}
  
    
    return(
        <div>
            <CartInfo onClick={handleCart}>Go To Cart<Span >{cartInfo.length}</Span></CartInfo>
            {
                cart && (
                    <Carts >

                    <h2>Items:{cartInfo.length}</h2>
                    {
                     cartInfo && cartInfo.map((ele)=>{
                            return(
                                <div key={ele.name}>
                                    <ProductName> Name :{ele.name}</ProductName>
                                    <Rating>Rating :{ele.rating}</Rating>
                                    <Price>Price : {ele.price}</Price>
                                    <P>Total Price : {parseInt(ele.price) * props.quantity}</P>
                                    <Remove onClick={()=>{
                                        removeItem(ele.name)
                                    }}>Remove From Cart</Remove>

                                    
                                    </div>
                            )
                        })
              
                        
                    }
               
                 

                 
                   
                </Carts>

                )
            }
          
        </div>
    )
}