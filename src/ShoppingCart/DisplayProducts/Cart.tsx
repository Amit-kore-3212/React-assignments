import React, { useEffect, useState } from 'react'
import '../../App.css'

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
            <button className="button" onClick={handleCart}>Go To Cart<span className="comment-notification">{cartInfo.length}</span></button>
            {
                cart && (
                    <div className="cart">

                    <h2>Items:{cartInfo.length}</h2>
                    {
                     cartInfo && cartInfo.map((ele)=>{
                            return(
                                <div key={ele.name}>
                                    <p>Name :{ele.name}</p>
                                    <p>Rating :{ele.rating}</p>
                                    <h5>Price : {ele.price}</h5>
                                    <h4>Total Price : {parseInt(ele.price) * props.quantity}</h4>
                                    <button onClick={()=>{
                                        removeItem(ele.name)
                                    }}>Remove From Cart</button>

                                    
                                    </div>
                            )
                        })
              
                        
                    }
               
                 

                 
                   
                </div>

                )
            }
          
        </div>
    )
}