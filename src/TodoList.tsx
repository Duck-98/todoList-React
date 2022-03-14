
import {   useRecoilValue } from "recoil";
import styled from 'styled-components';
import { toDoState } from './atoms';
import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';







function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />  
      <ul color='white'>
        {toDos.map((toDo) => (<ToDo key={toDo.id} {...toDo} />))}
      </ul>
    </div>
  );
} 

export default ToDoList;