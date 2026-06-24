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

        display:"flex",

        flexWrap:"wrap",

        justifyContent:"space-between",

        alignItems:"center",

        gap:"15px",

        padding:"15px 20px",

        background:"#1e293b",

        color:"#fff",

      }}

    >

      <h2

        style={{

          fontSize:"clamp(20px,3vw,30px)",

          margin:0,

        }}

      >

        🚀 Lead Management System

      </h2>

      <div

        style={{

          display:"flex",

          flexWrap:"wrap",

          gap:"10px",

          justifyContent:"center",

          alignItems:"center",

        }}

      >

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

  color:"#fff",

  textDecoration:"none",

  padding:"10px 15px",

  borderRadius:"8px",

  background:"#334155",

};

const logoutStyle = {

  background:"#dc2626",

  color:"#fff",

  border:"none",

  padding:"10px 15px",

  borderRadius:"8px",

  cursor:"pointer",

};