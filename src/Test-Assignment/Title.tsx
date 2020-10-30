import React from 'react'
import { useState } from 'react'

interface Props {
    value:string
}


export const Title:React.FC<Props>=(props:Props)=>{
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
    const validate = ()=>{
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

    const handleSubmit =(e:React.FormEvent<EventTarget>)=>{
        e.preventDefault()
        const isValidate = validate()
        if(isValidate){
            const formData={
                Title,
                Description
                
            }
          

        }
     

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Title : </label>
            <input type="text" value={Title} onChange={handleTitle} />
              <div style={{color:'red'}}>{TitleError}</div><br/>
            
          
            <br/>
            <label>Description : </label>
            <textarea  value={Description} onChange={handleDescription} />
            <div style={{color:'red'}}>{DescriptionError}</div><br/>
            <input type="submit" value="AddtoStoryBook"/>
            </form>

        </div>
    )
}