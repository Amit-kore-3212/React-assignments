import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {History,LocationState} from 'history'

interface Props{
    username : String|null
    history:History<LocationState>
}

export const Login:React.FC<Props> =  (props:Props, {history}:RouteComponentProps) => {
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [errorUserName , setErrorUserName] = useState<string>("")
    const [errorPassword , setErrorPassword] = useState<string>("")
   
 
    const handleUserName=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setUsername(e.target.value)
        

    }
    const handlePassword =(e:React.ChangeEvent<HTMLInputElement>) : void => {
        setPassword(e.target.value)

    }
 
     const validate =():boolean =>{
         if(username == ""){
             setErrorUserName("Username should be Present")
             return false
         }else {
             setErrorUserName("")
         }
         if(password.length < 6){
             setErrorPassword("Password should have atleast 6 characters")
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
                <input type="text" value={username} onChange={handleUserName}/>

                </div>
                <div style={{color:'red'}}>{errorUserName}</div>
                <div><br/>
                <label>Password :</label>
                <input type="password" value={password} onChange={handlePassword}/>

                </div>
                <div style={{color:'red'}}>{errorPassword}</div><br/>

                <input type="submit" value="Login"  />
             
            </form>

        </div>
    )

}