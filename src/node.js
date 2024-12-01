// src/node.js
const createNode=(value=null,nextNode=null)=>{
    return{
        value,
        nextNode
    };
};

export default createNode;