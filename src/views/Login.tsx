import React, { useState, useReducer } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Paper, Box, TextField, FormGroup, Button } from "@mui/material";

interface user {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<user>();
  const onSubmit: SubmitHandler<user> = async (data) => {
    console.log(data);
    const response = await fetch("http://localhost:3333/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const res = await response.json();
    console.log(res)
  };

  return (
    <>
      <Paper variant="outlined">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <TextField
              label="username"
              variant="outlined"
              required
              {...register("username")}
            />
            <TextField
              label="password"
              variant="outlined"
              type="password"
              required
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
