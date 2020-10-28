import React, { useState } from 'react'

interface Props{
    id:number,
    name:string,
    rating:number,
    description:string,
     price:number
    addToCart : (name:string,rating:number,price:number,quantity:number)=> void
   
}


 export const DisplayProducts:React.FC<Props>=(props:Props)=>{
     const [edit , setEdit] = useState<boolean>(false)
     const [editRating ,setEditRating ] = useState<number>(props.rating)
     const [quantity,setquantity] = useState<number>(1)
    

    const handleEdit=()=>{
        setEdit(prevState =>  !prevState)

    }
    const handleChange =(e:any) :void=>{
        setEditRating(e.target.value)
    }
    const EditedValue =() :void=>{
        setEdit(prevState => !prevState)
    }
   const editTotally = (name:string , rating:number , price:number , quantity:number) :void=>{
       props.addToCart(name,rating,price , quantity)
   }
   const handleQuantity=(e:any) :void=>{
       setquantity(e.target.value)

   }
  
    
    return(
        <div>
          <p>id:{props.id}</p>
          <h5>Name : {props.name}</h5> 
          {
              edit ?  <div><input type="text" value={editRating} onChange={handleChange}/> <button onClick={EditedValue} >Update</button></div> : 
              <p>Rating:{editRating}<button onClick={handleEdit}>Edit Rating</button></p>
          }
          
          <p>Description :{props.description}</p>
          <p>Quantity : <input type="number" value={quantity} onChange={handleQuantity} /></p>
          <h6>Price : {props.price}</h6>

          <button onClick={()=>{
              editTotally(props.name , editRating, props.price , quantity)
          }}>Add To Cart</button>



       
        </div>
    )

}