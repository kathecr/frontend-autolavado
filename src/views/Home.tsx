import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CreateService from "./CreateService";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    console.log("here", localStorage.getItem("token"));
    if (localStorage.getItem("token") === "error") {
      console.log("error");
      navigate("/login", { replace: true });
    }
  });

  return (
    <>
      <CreateService></CreateService>
    </>
  );
};

export default Home;

