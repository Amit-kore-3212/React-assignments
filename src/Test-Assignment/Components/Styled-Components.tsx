import React from 'react'
import styled from 'styled-components'

export const NavBar = styled.div`
display:flex;
border-radius:3px;
background-color:lightblue;
height:50px;
justify-content:space-evenly;
align-items:center;
`
export const NavItem = styled(NavBar)`
text-decoration:none;

`
export const HeadingText= styled.h3`
color:#dfb1a9;
font-family:Arial, Helvetica, sans-serif;

`
export const InputElement = styled.input`
background-color:lightgrey;
border:1px solid lightgrey;
border-radius:5px;
width:400px;
height:30px;
color:tomato;
font-family:Arial, Helvetica, sans-serif;
`
export const Discription = styled.textarea`
background-color:lightgray;
border: 1px solid lightgray;
border-radius:5px;
width:400px;
height:100px;
color:blueviolet;
font-family:Arial, Helvetica, sans-serif;
`
export const Posts= styled.div`
padding:30px 0px 0px 480px;

`
export const Titled = styled.div`
width:400px;

`
export const Label = styled.p`
color:palevioletred;
font-family:Arial, Helvetica, sans-serif;

`
export const SubmitButton = styled.input`
background-color:steelblue;
width:200px;
height:30px;
color:white;
border:1px solid steelblue;
border-radius:5px;

`
export const Search = styled.input`
background-color:lightgoldenrodyellow;
border:1px solid lightgoldenrodyellow;
width:300px;
height:30px;
border-radius:5px;

`
export const PublishedPosts = styled.div`
padding:30px 0px 0px 480px;

`
export const PublishedTitle = styled.h5`
background-color:#21e0e0;
border:1px solid #21e0e0;
border-radius:5px;
width:400px;
height:30px;
text-align:center;
color:palevioletred;
font-size:20px;

`
export const PublishedDescription = styled.p`
background-color:  lightgrey;
border:1px solid lightgray;
width:500px;
height:400px;
border-radius:5px;
color:purple;


`