import styled from 'styled-components'

export const Header = styled.div`
background-color : #ddd;
width : 100%;
height:40px;
border-radius:5px;
top:10px;
/* padding:10px; */
 text-align:center;
` 


 export const Info = styled.div`
   border: 1px solid gray;
   background-color:whitesmoke;
    width: 200px;
    height: 370px;
    float: left;
    margin-left: 10px;
    text-align: center;
    border-radius: 5px;
   
`

export const Head = styled.h5`
color:skyblue;
font-size:20px;
font-family:Arial, Helvetica, sans-serif;
padding-top:10px;

`

export const Product =styled.div`

`
export const ID=styled.p`
color:gold;
font-size:15px;
font-family:Arial, Helvetica, sans-serif;

`
export const ProductName = styled.h5`
color:skyblue;
font-size:15px;
font-weight:initial;

`
export const Rating = styled.p`
color:gold;
font-size:12px;
font-family:Arial, Helvetica, sans-serif;

`
export const EditRating = styled.input`
background-color:white;
color:black;
border:1px solid skyblue;
border-radius:5px;
`

export const Button =styled.button`
text-align:center;
background-color:skyblue;
border:1px solid skyblue;
border-radius:5px;
color:white;

`
export const Description = styled.h6`
color:tomato;
font-size:15px;
`
export const Quantity = styled.input`
background-color:cadetblue;
width:40px;
color:white;
border:1px solid white;
border-radius:5px;
`
export const P = styled.p`
color:blue;

`
export const Price = styled.h4`
color:violet;
font-family:Arial, Helvetica, sans-serif;
font-weight:bold;

`
export const CartInfo = styled.button`
  position: absolute;
    font-size: 10px;
    top: 40px;
    right: 90px;
    padding: 5px 10px;
    background: plum;
    color: white;
    border: 1px solid white;


`
export const Span = styled.span`
 position: absolute;
    font-size: 10px;
    top: 0px;
    right: -20px;
    padding: 5px 10px;
    border-radius: 50%;
    background: plum;
    color: white;
    border: 1px solid white;



`
export const Remove =  styled.button`
text-align:center;
background-color:red;
border:1px solid skyblue;
border-radius:5px;
color:white;

`
export const Carts = styled.div`
   position:absolute;
    top: 70px;
    border: 1px solid burlywood;
    right: 15px;
    width: 200px;
    height: 100%;
    background-color: snow;
    border-radius: 5px;


`