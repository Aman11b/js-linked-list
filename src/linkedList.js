// src/linkedList.js

import createNode from "./node.js";

const createLinkedList=()=>{
    let head=null;
    let tail=null;
    let listSize=0;

    const append=(value)=>{
        const newNode=createNode(value);

        if(!head){
            head=newNode;
            tail=newNode;
        }else{
            tail.nextNode=newNode;
            tail=newNode;
        }
        listSize++;
        return newNode;
    }

    const prepend=(value)=>{
        const newNode=createNode(value);

        if(!head){
            head=newNode;
            tail=newNode;
        }else{
            newNode.nextNode=head;
            head=newNode;
        }
        listSize++;
        return newNode;
    };

    const toString=()=>{
        let current=head;
        let str='';

        while(current){
            str +=`(${current.value})->`;
            current=current.nextNode;
        }

        return str+'null';
    };

    const size=()=>{
        return listSize;
    };

    const getHead=()=>{
        return head;
    };

    const getTail=()=>{
        return tail;
    };

    const at=(index)=>{
        if(index<0 || index>listSize){
            console.warn(`Invalid index. List size is ${listSize}. Index must be between 1 and ${listSize}`);
            return null;
        }
        let current=head;
        for(let i=1;i<index;i++){
            current=current.nextNode
        }
        return current;
    };

    const pop=()=>{
        if(!head){
            console.warn("Cannot pop from an empty list");
            return null;
        }
        if(head===tail){
            const value=head.value;
            head=null;
            tail=null;
            listSize=0;
            return value;
        }
        let current=head;
        while(current.nextNode!==tail){
            current=current.nextNode;
        }

        const poppedValue=tail.value;

        tail=current;
        tail.nextNode=null;

        listSize--;
        return poppedValue;
    };

    const contains=(value)=>{
        if(!head){
            return false;
        }
        let current=head;
        while(current){
            if(current.value===value){
                return true
            }
            current=current.nextNode;
        }
        return false;
    };

    const find=(value)=>{
        if(!head){
            return null;
        }
        let current=head;
        let index=1;

        while(current){
            if(current.value===value){
                return index;
            }
            current=current.nextNode;
            index++;
        }
        return null;
    };

    const insertAt=(value,index)=>{
        if(index<1 || index>listSize+1){
            console.warn(`Invalid index. List size is ${listSize}. Index must be between 1 and ${listSize + 1}`);
            return null;
        }

        if(index==1){
            return prepend(value);
        }
        if(index===listSize+1){
            return append(value);
        }
        let current=head;
        for(let i=1;i<index-1;i++){
            current=current.nextNode;
        }

        const newNode=createNode(value);
        newNode.nextNode=current.nextNode;
        current.nextNode=newNode;

        listSize++;
        return newNode;
    };

    const removeAt=(index)=>{
        if (index < 1 || index > listSize) {
            console.warn(`Invalid index. List size is ${listSize}. Index must be between 1 and ${listSize}`);
            return null;
        }
        if(index==1){
            const removeValue=head.value;
            head=head.nextNode;

            if(!head){
                tail=null;
            }
            listSize--;
            return removeValue;
        }
        let current=head;
        for(let i=1;i<index-1;i++){
            current=current.nextNode;
        }

        const removeValue=current.nextNode.value;
        current.nextNode=current.nextNode.nextNode;

        if(index===listSize){
            tail=current;
        }
        listSize--;
        return removeValue;

    };

    return{
        append,
        prepend,
        toString,
        size,
        head:getHead,
        tail:getTail,
        at,
        pop,
        contains,
        find,
        insertAt,
        removeAt
    };

};

export default createLinkedList;