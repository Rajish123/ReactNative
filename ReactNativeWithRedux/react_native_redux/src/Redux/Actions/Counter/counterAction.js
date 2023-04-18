const incrementValueAction = ()=>{
    return {type:'increment'};
};

const decrementValueAction = ()=>{
    return {type:'decrement'};
};

const setCustomValueAction = (text)=>{
    return {type:'changeValue',payload:text}
}

export {incrementValueAction,decrementValueAction,setCustomValueAction}