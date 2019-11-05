const  defaultState={
    list: [
    ],
    bulist:[
    ],
    rList:[
    ],
    blist:[
    ]
}

export  default (state=defaultState,action)=>{
    console.log(action)
    if(action.type==="getdata"){
       const newstate=JSON.parse(JSON.stringify(state))

        newstate.list=action.data.list
        newstate.bulist=action.data.bulist
        newstate.rList=action.data.rList
        newstate.blist=action.data.blist
        return newstate
    }
    return state
}