import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/api";

export default function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({

    name: "",

    email: "",

    password: "",

  });

  const handleChange = (e) => {

    setUser({

      ...user,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser(user);

      alert("Account created successfully");

      navigate("/");

    }

    catch (error) {

      alert("Unable to create account");

      console.log(error);

    }

  };

  return (

    <div style={containerStyle}>

      <div style={boxStyle}>

        <h1>Create Account</h1>

        <br />

        <form onSubmit={handleSubmit}>

          <input

            name="name"

            placeholder="Full Name"

            onChange={handleChange}

            required

            style={inputStyle}

          />

          <input

            name="email"

            type="email"

            placeholder="Email"

            onChange={handleChange}

            required

            style={inputStyle}

          />

          <input

            name="password"

            type="password"

            placeholder="Password"

            onChange={handleChange}

            required

            style={inputStyle}

          />

          <button style={buttonStyle}>

            Sign Up

          </button>

        </form>

      </div>

    </div>

  );

}

const containerStyle = {

  minHeight:"100vh",

  display:"flex",

  justifyContent:"center",

  alignItems:"center",

  background:

  "linear-gradient(135deg,#2563eb,#9333ea)",

};

const boxStyle = {

  width:"500px",

  background:"#fff",

  padding:"40px",

  borderRadius:"20px",

};

const inputStyle = {

  width:"100%",

  padding:"14px",

  marginBottom:"20px",

  borderRadius:"10px",

  border:"1px solid #ccc",

};

const buttonStyle = {

  width:"100%",

  padding:"15px",

  background:"#2563eb",

  color:"#fff",

  border:"none",

  borderRadius:"10px",

};