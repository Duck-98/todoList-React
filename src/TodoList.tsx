import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const Span = styled.span`
color : white;
`;

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
  };

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
    const {register,  handleSubmit, formState :{errors}} = useForm<IForm>({
        defaultValues:{
            email:"@naver.com"
        }
    });

    const onValid = (data:any) => {
        console.log(data)
    }

  return (
    <div>
      <form  onSubmit={handleSubmit(onValid)}>
      <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <Span>{errors?.email?.message}</Span>
        <input
          {...register("firstName", { required: "write here" })}
          placeholder="First Name"
        />
        <Span>{errors?.firstName?.message}</Span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="Last Name"
        />
        <Span>{errors?.lastName?.message}</Span>
        <input
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="Username"
        />
        <Span>{errors?.username?.message}</Span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <Span>{errors?.password?.message}</Span>
        <input
          {...register("password1", {
            required: "Password is required", })}
          placeholder="Password1"
        />
        <Span>{errors?.password1?.message}</Span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;