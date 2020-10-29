import React, { useState } from 'react'
import { Product,ID, ProductName, Rating, EditRating, Button, Description, Quantity,P, Price } from '../StyledComponents/stylecomponent'

interface Props{
    id:number,
    name:string,
    rating:number,
    description:string,
     price:number
    addToCart : (name:string,rating:number,price:number,id:number,quantity:number)=> void
   
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
   const editTotally = (name:string , rating:number , price:number ,id:number, quantity:number) :void=>{
       props.addToCart(name,rating,price ,id, quantity)
   }
   const handleQuantity=(e:any) :void=>{
       setquantity(e.target.value)

   }
  
    
    return(
       <Product>
          <ID>id:{props.id}</ID>
          <ProductName>Name : {props.name}</ProductName> 
          {
              edit ?  <div><EditRating type="text" value={editRating} onChange={handleChange}/> <Button onClick={EditedValue} >Update</Button></div> : 
              <div>
                             <Rating>Rating:{editRating}</Rating>
              <Button  onClick={handleEdit}>Edit Rating</Button>

              </div>
   
          }
          
          <Description>Description :{props.description}</Description>
          <P>Quantity : <Quantity type="number" value={quantity} onChange={handleQuantity} /></P>
          <Price>Price : {props.price}</Price>

          <Button onClick={()=>{
              editTotally(props.name , editRating, props.price ,props.id,  quantity)
          }}>Add To Cart</Button>



       
</Product>
    )

}