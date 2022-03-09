import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const toDoState = atom<ITodo[]>({
    key:"toDo",
    default:[],
});

const Span = styled.span`
color : white;
`;

interface IForm {
    toDo:string
  };

interface ITodo {
    text: string;
    category : "DOING" | "DONE" | "TO_DO";
}

function ToDoList() {
    const [toDos, setToDos] = useSetRecoilState(toDoState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onSubmit = ({toDo} : IForm) => {
        console.log('add to do', data.toDo);
        setToDos(oldToDos => [{},...oldToDos]);
        setValue("toDo", "");
    }
   return (
       <>
       <div>
           <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("toDo",{
                   required :"Please write a to do",
               })} placeholder='write a to do' />
               <button>add</button>
           </form>
       </div>

       </>
   )
}
export default ToDoList; 