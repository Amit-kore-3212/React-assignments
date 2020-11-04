import React, { useState } from 'react'


interface Props{
    handleTodos : (value:{})=>void
}

 export const Todo:React.FC<Props>=(props:Props)=>{
     const[todos,setTodos]=useState<string>("")
     const [todoList,setTodoList] = useState<string[]>([])
     const [date,setDate] = useState<string>("")
 


const handleTodos =(e:React.ChangeEvent<HTMLInputElement>):void=>{
const { value} = e.target
setTodos(value)
props.handleTodos({todos:value})
    
    
    
}
const validate = () =>{
if(todos.length > 10){
alert("Enter lessthan 10 Characters")
    return false
}
return true
}


const handleAdding=() :void => {
    const isValidate:boolean = validate()
    if(isValidate){
        setTodoList(prevState => prevState.concat(todos))
        // setTodoList ([...todoList,todos])
        setTodos("")
        const  dates= new Date().toDateString().split(' ')[1]
        const month = new Date().toDateString().split(' ')[2]
        const today = month + " " + dates
        setDate(today)

    }
 


}
const removeItem =(item:number) : void=>{
   const data=todoList.splice(item,1)
   setTodoList(todoList.filter(ele => ele == data.toString()))


}


    return(
        <div>
            <p data-testid='Hello' > Hello : {localStorage.getItem('username')}</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <input type="text" data-testid="todo" value={todos} onChange={handleTodos} />
            <button onClick={handleAdding}>Add</button>
          
            <br/>
            <br/>
            <br/>
            <ol >
            {
               todoList &&  todoList.map((ele,i)=>{
                  
                    return (
                        
                        
                        <div   key={i}>
        
                          
                                <li  onDoubleClick={()=>{
                                    removeItem(i)
                                }}>{ele}  {date}</li>
                           
                        </div>
                    
                        
                        
                    )
                    
                })
                 
            }
            </ol>
         

            
           
            

        </div>
    )

}