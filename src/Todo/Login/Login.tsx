import React, { useEffect, useState,useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {History,LocationState} from 'history'
import passwordValidator from 'password-validator'


const schema = new passwordValidator()

schema
.is().min(6)                                    // Minimum length 6
.is().max(12)                                  // Maximum length 12
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces() 
.has().symbols(1)


interface Props{
    username : String|null
    history:History<LocationState>
}

export const Login:React.FC<Props> =  (props:Props, {history}:RouteComponentProps) => {
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [errorUserName , setErrorUserName] = useState<string>("")
    const [errorPassword , setErrorPassword] = useState<string>("")
    const TextInput = useRef() as React.RefObject<HTMLInputElement>
    const InputPassword = useRef() as React.RefObject<HTMLInputElement>
  
   
 
    const handleUserName=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setUsername(e.target.value)
        

    }
    const handlePassword =(e:React.ChangeEvent<HTMLInputElement>) : void => {
        setPassword(e.target.value)

    }
 
     const validate =():boolean =>{
         if(username == ""){
             setErrorUserName("Username should be Present")
         TextInput?.current?.focus()

             return false
         }else {
             setErrorUserName("")
         }
         if(!schema.validate(password)){
             setErrorPassword("Password should contain atleas 6 Characters with  UpperCase and LowerCase letters and must include 2 numerics and  1 symbols ")
             InputPassword?.current?.focus()
            
             return false
         }else {
             setErrorPassword("")
         }
     return true

     }

   

    const handleSubmit=(e:any) : void =>{
        e.preventDefault()
        const isValidate=validate()
        if(isValidate){
     
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)
             props.history.push("/todo")
           
          
            
           
            

        }
        

    }
    
   


    useEffect(() : void=> {
        
        const username = localStorage.getItem('username')
        if(username){
            setUsername(username)
        }

        const password = localStorage.getItem('password')
        if(password){
            setPassword(password)
        }
      
     
 },[])
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Username :</label>
                <input type="text" value={username}  placeholder="Enter Valid User Name" ref={TextInput} onChange={handleUserName}/>

                </div>
                <div style={{color:'red'}}>{errorUserName}</div>
                <div><br/>
                <label>Password :</label>
                <input type="password" value={password}  placeholder="Enter Password" ref={InputPassword} onChange={handlePassword}/>

                </div>
                <div style={{color:'red'}}>{errorPassword}</div><br/>

                <input type="submit" value="Login"  />
             
            </form>

        </div>
    )

}