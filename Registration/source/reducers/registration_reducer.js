
let dataState = {data:[]};
 
export const registration= (state = dataState, action) => {
    switch (action.type) 
    {
        case 'REGISTRATION':
        //alert("action.obj"+ action.obj.email)
        
        return{
            ...state,
           
            data: state.data.concat(action.obj),
                
    }

    case 'login':
    //alert("action.obj"+ action.obj.email)
    
    return{
        ...state,
            
}
   

    default:
        return state;
}
};