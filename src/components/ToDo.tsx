import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IToDo, toDoState } from '../atoms';


const Li = styled.li`
color : white;
`


 
function ToDo({text, category, id}:IToDo){
    const setTodos = useSetRecoilState(toDoState);
    const onClick = (event : React.MouseEvent<HTMLButtonElement>) =>{
        const {currentTarget : {name} } = event;
    }
    setTodos((oldToDos) => {
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
        const oldToDo = oldToDos[targetIndex];
        const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
        


    return (
        <Li>
            <span>{text}</span>
            {category !== "TO_DO" && ( <button name="TO_DO" onClick={onClick}>To Do</button>)} 
            {category !== "DOING" && (<button name="DOING" onClick={onClick}>Doing</button>)}
            {category !== "DONE"  &&  (<button name="DONE" onClick={onClick}>Done</button>)}
        </Li> 
    )
}
 
export default ToDo;     