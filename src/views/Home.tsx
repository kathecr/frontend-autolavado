import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    console.log("here", localStorage.getItem("token"));
    if (localStorage.getItem("token") === "error") {
      console.log("error");
      navigate("/login", { replace: true });
    }
  });
  return <>Jhome</>;
};

export default Home;
