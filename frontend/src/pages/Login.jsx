import { useState } from "react";

import {

  useNavigate,

  Link,

} from "react-router-dom";

import {

  getUsers,

} from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await getUsers();

      const users = response.data;

      const user = users.find(

        (u) =>

          u.email === email

          &&

          u.password === password

      );

      if (user) {

        localStorage.setItem(

          "token",

          "loggedin"

        );

        navigate("/dashboard");

      }

      else {

        alert("Invalid Login");

      }

    }

    catch (error) {

      alert("Login Failed");

      console.log(error);

    }

  };

  return (

    <div

      style={{

        minHeight:"100vh",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        background:

        "linear-gradient(135deg,#2563eb,#9333ea)",

        padding:"15px",

      }}

    >

      <div

        style={{

          width:"100%",

          maxWidth:"500px",

          background:"#fff",

          padding:"45px",

          borderRadius:"25px",

          boxShadow:

          "0 20px 40px rgba(0,0,0,0.25)",

        }}

      >

        <h1

          style={{

            textAlign:"center",

            fontSize:"38px",

            marginBottom:"10px",

          }}

        >

          🚀 Akar Lead Management System

        </h1>

        <h2

          style={{

            textAlign:"center",

            color:"#2563eb",

            marginBottom:"10px",

          }}

        >

          👋 Welcome Back

        </h2>

        <p

          style={{

            textAlign:"center",

            color:"#666",

            marginBottom:"30px",

          }}

        >

          Login to continue

        </p>

        <form onSubmit={handleSubmit}>

          <label>

            Email

          </label>

          <input

            type="email"

            placeholder="Enter email"

            value={email}

            onChange={(e)=>

              setEmail(

                e.target.value

              )

            }

            style={inputStyle}

          />

          <label>

            Password

          </label>

          <input

            type="password"

            placeholder="Enter password"

            value={password}

            onChange={(e)=>

              setPassword(

                e.target.value

              )

            }

            style={inputStyle}

          />

          <button

            style={buttonStyle}

          >

            Login

          </button>

        </form>

        <p

          style={{

            textAlign:"center",

            marginTop:"25px",

          }}

        >

          New Member?

          <Link

            to="/signup"

            style={{

              marginLeft:"10px",

              color:"#2563eb",

              fontWeight:"bold",

              textDecoration:"none",

            }}

          >

            Sign Up

          </Link>

        </p>

      </div>

    </div>

  );

}

const inputStyle = {

  width:"100%",

  padding:"14px",

  marginTop:"8px",

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

  fontSize:"18px",

  cursor:"pointer",

};