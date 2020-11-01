


const postReducer =(state=[],action:any) =>{
    switch(action.type){
        case "ADD_POST":{
            return state.concat(action.payload)
        }

        default:{
            return [].concat(state)
        }
    }
}

export default postReducer