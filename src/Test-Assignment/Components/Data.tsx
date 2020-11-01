import React , {useState } from 'react'
import {connect} from 'react-redux'
import { Label, PublishedDescription, PublishedPosts, PublishedTitle, Search } from './Styled-Components'



interface Props {
    posts:any[]

}


 const Data:React.FC<Props>=(props:Props)=>{

    const [search , setSearch ] = useState<string>("")

const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)

}



    
    return (
        <PublishedPosts>

            <div>
                <Search type="search" placeholder="search" value={search} onChange={handleChange}/>
            </div>
            <Label>Published Posts - {props.posts.length}</Label>
            {
              props.posts &&   props.posts.filter ( ele => ele.Title.includes(search)).map((post:any , i ) =>{
                    return (
                        <div key={i}>
                          

                            <PublishedTitle> Title :{post.Title}</PublishedTitle>
                          
                           
                            <PublishedDescription> Description : {post.Description}</PublishedDescription>

                            </div>
                    )
                })
            }
           
            
           
        </PublishedPosts>
    )
}

const mapStateToProps =(state:any)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)( Data)