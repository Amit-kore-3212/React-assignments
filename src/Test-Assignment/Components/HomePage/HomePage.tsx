import React from 'react'
import { Link , BrowserRouter} from 'react-router-dom'
import { HeadingText, NavBar, NavItem } from '../Styled-Components'

export const Home:React.FC=()=>{
    return (
        <BrowserRouter>
        
        <NavBar>
            <NavItem>
    <Link to="/">New Posts</Link>s
</NavItem>
<NavItem>
<HeadingText data-testid="message">Welcome to  your own story writing Page</HeadingText>
</NavItem>

<NavItem>
    <Link to="/posts">Published Posts</Link>
</NavItem>

        </NavBar>
        </BrowserRouter>
    )
}





