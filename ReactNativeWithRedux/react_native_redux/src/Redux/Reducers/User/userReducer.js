const initialState = {
    uid:'',
    username:'',
    password:'',
    email:'',
    firstName:'',
    lastName:'',
    gender:'',
    image:'',
    isUserLogin:false,
};

const userReducer = (state=initialState,action)=>{
    switch(action.type) {
        case 'setUsername':
            return {
                ...state,
                username:action.payload,
            };
        case 'setPassword':
            return {
                ...state,
                password:action.payload,
            };
        case 'login':
            return {
                ...state,
                username:action.payload.username,
                password:action.payload.password,
                isUserLogin:true,
            };
        case 'logout':
            return {
                ...state,
                isUserLogin:false,
            };
        default:
            return state
    }
};
export default userReducer;
// userReducer({type:'setId',id:1});
// userReducer({type:'setUsername',username:"rajish"});
// userReducer({type:'setUserData',data:{uid:1,userName:"Maharjan"}})
// userReducer({type:'setIsUserLogin',login:true})