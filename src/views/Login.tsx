import React, { useState, useReducer } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Paper, Box, TextField, FormGroup, Button, FormControl } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface user {
  username: string;
  password: string;
}

const Login = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm<user>();
  const onSubmit: SubmitHandler<user> = async (data) => {
    const response = await fetch("http://localhost:3333/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const res = await response.json();
    console.log(res);
    if(response.status === 200){
      localStorage.setItem('token', res.result.token);
      console.log('token', res.token);
      navigate('/',{replace:true})
    }else{
      console.log('error de atuenticacion')
      localStorage.setItem('token', 'error');
    }
  };

  return (
    <>
      <Paper variant="outlined">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <TextField label="username" variant="outlined" required
              {...register("username")}
            />
            <TextField label="password" variant="outlined" type="password"  required
              {...register("password")}
            />
            <Button variant="contained" type="submit">
              Sing In
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default Login;
