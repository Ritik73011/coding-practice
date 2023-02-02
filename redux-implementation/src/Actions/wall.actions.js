const wallActions = (payload,dispatch)=>{
    dispatch({
        type:"WALL",
        payload:payload
    })
}
export default wallActions;