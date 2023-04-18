const setUsername=(text)=>{
    return {type:'setUsername',payload:text}
};

const setPassword = (text)=>{
    return {type:'setPassword',payload:text}
};

const loginAction = (username,password)=>{
    return {type:'login',payload:{username:username,password:password}}
};

const logoutAction = ()=>{
    return {type:'logout'}
}


export {setUsername,setPassword,loginAction,logoutAction}