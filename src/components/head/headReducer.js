const  defauleState={
    flag:false
}

export  default (state= defauleState,action)=>{
    if(action.type==="inp_focus"){
        const newstate=JSON.parse(JSON.stringify(state))
        newstate.flag=true
        return newstate

    }else if(action.type==="inp_blur"){
        const newstate=JSON.parse(JSON.stringify(state))
        newstate.flag=false
        return newstate
    }
    return state
}