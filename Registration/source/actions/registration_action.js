
export function registration(obj)
{
    return(dispatch)=>{
        //alert("========="+ obj.email);
        dispatch({type:'REGISTRATION',obj})
    }
}

export function login(obj)
{
    return(dispatch)=>{
        //alert("========="+ obj.email);
        dispatch({type:'LOGIN',obj})
    }
}
