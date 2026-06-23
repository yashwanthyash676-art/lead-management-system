import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div

      style={{

        display: "flex",

        justifyContent: "space-between",

        alignItems: "center",

        padding: "20px 40px",

        background: "#1e293b",

        color: "#fff",

      }}

    >

      <h2>

        Lead Management System

      </h2>


      <div>

        <Link

          to="/dashboard"

          style={linkStyle}

        >

          Dashboard

        </Link>


        <Link

          to="/add-lead"

          style={linkStyle}

        >

          Add Lead

        </Link>


        <button

          onClick={logout}

          style={logoutStyle}

        >

          Logout

        </button>

      </div>

    </div>

  );

}


const linkStyle = {

  color: "#fff",

  marginRight: "20px",

  textDecoration: "none",

};


const logoutStyle = {

  background: "#dc2626",

  color: "#fff",

  border: "none",

  padding: "10px 15px",

  borderRadius: "8px",

  cursor: "pointer",

};