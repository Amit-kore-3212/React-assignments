import React from 'react'
import { Link } from 'react-router-dom'
import { HeadingText, NavBar, NavItem } from './Styled-Components'

export const Home:React.FC=()=>{
    return (
        <NavBar>
            <NavItem>
    <Link to="/">New Posts</Link>
</NavItem>
<NavItem>
<HeadingText>Welcome to  your own story writing Page</HeadingText>
</NavItem>

<NavItem>
    <Link to="/posts">Published Posts</Link>
</NavItem>

        </NavBar>
    )
}





