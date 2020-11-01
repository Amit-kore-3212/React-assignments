import React from 'react'
import { useState } from 'react'
import { useDispatch  } from 'react-redux'
import { RouteComponentProps  } from 'react-router-dom'
import {History,LocationState} from 'history'
import { postAction } from '../Actions/postAction'
import { InputElement ,  Discription, Posts, Titled, Label , SubmitButton } from './Styled-Components'





interface Props {
    postAction :(formData:any)=> void

    history : History<LocationState>  
}


export const Title:React.FC<Props> = (props:Props , history : RouteComponentProps)=>{

    const dispatch = useDispatch()
    const [Title , setTitle]= useState<string>("")
    const [Description,setDescription] = useState<string>("")
    const [TitleError , setTitleError] =useState<string>("")
    const [DescriptionError, setDescriptionError] = useState<string>("")



    const handleTitle =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)

    }

    const handleDescription =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setDescription(e.target.value)
      

    }
    const validate = () : boolean=>{
      if( Title === ""){
          setTitleError("Title should not be empty")
          return false;
      }else {
          setTitleError("")
         
      }
      if(Description.length < 10){
          setDescriptionError("Descriprion should be more than 10 characters ")
          return false;
      }else{
          setDescriptionError("")
          
      }
      return true
     
    }

    const handleSubmit =(e:React.FormEvent<EventTarget>) :void =>{
        e.preventDefault()
        const isValidate = validate()
        if(isValidate){
            const formData={
                Title,
                Description
                
            }
        dispatch(postAction(formData))
        props.history.push('/posts')
        }
     

    }

    return(
        
        <Posts>
            
            <form onSubmit={handleSubmit}>
                <Titled>
                <Label>Title : </Label>
            <InputElement type="text" value={Title} placeholder="Title" onChange={handleTitle} />
              <div style={{color:'red'}}>{TitleError}</div><br/>

                </Titled>
          
            
          
            <br/>
            <Titled>
            <Label>Description : </Label>
            <Discription  value={Description} placeholder="Disciption" onChange={handleDescription} />
            <div style={{color:'red'}}>{DescriptionError}</div><br/>
            <SubmitButton type="submit"  value="Add To StoryBook"/>
                
            </Titled>
           
            </form>

        </Posts>
    )
}