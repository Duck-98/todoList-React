import React, { useState } from "react";
import {useForm} from 'react-hook-form';

function ToDoList() {
  /*const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };*/
    const {register,  handleSubmit, formState} = useForm();

    const onValid = (data:any) => {
        console.log(data)
    }
    console.log(formState.errors);
  return (
    <div>
      <form  onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", {required: true})} placeholder="Email" />
        <input {...register("FirstName", {required: true})} placeholder="First Name" />
        <input {...register("LastName", {required: true})} placeholder="Last Name" />
        <input {...register("UserName", {required: true, minLength :10})} placeholder="UserName" />
        <input {...register("Password", {required: true})} placeholder="Password" />
        <input {...register("Password1", {required: "password가 필요합니다."})} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;