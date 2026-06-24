import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { addLead } from "../services/api";

export default function AddLead() {

  const navigate = useNavigate();

  const [lead, setLead] = useState({

    name: "",

    email: "",

    phone: "",

    company: "",

    status: "New",

    notes: "",

  });

  const handleChange = (e) => {

    setLead({

      ...lead,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await addLead(lead);

      alert("Lead Added Successfully");

      navigate("/dashboard");

    }

    catch (error) {

      alert("Unable to save lead");

      console.log(error);

    }

  };

  return (

    <div

      style={{

        minHeight:"100vh",

        background:"#f3f4f6",

        padding:"20px",

      }}

    >

      <div

        style={{

          width:"100%",

          maxWidth:"700px",

          margin:"auto",

          background:"#fff",

          padding:"25px",

          borderRadius:"20px",

          boxShadow:

          "0 10px 25px rgba(0,0,0,0.1)",

        }}

      >

        <h1

          style={{

            textAlign:"center",

            fontSize:"clamp(28px,4vw,40px)",

            marginBottom:"25px",

          }}

        >

          ➕ Add New Lead

        </h1>

        <form onSubmit={handleSubmit}>

          <input

            name="name"

            placeholder="Name"

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

            name="phone"

            placeholder="Phone"

            onChange={handleChange}

            required

            style={inputStyle}

          />

          <input

            name="company"

            placeholder="Company"

            onChange={handleChange}

            required

            style={inputStyle}

          />

          <select

            name="status"

            onChange={handleChange}

            style={inputStyle}

          >

            <option>New</option>

            <option>Contacted</option>

            <option>Converted</option>

          </select>

          <textarea

            name="notes"

            rows="4"

            placeholder="Notes"

            onChange={handleChange}

            style={inputStyle}

          />

          <button

            style={buttonStyle}

          >

            💾 Save Lead

          </button>

        </form>

      </div>

    </div>

  );

}

const inputStyle = {

  width:"100%",

  padding:"14px",

  marginBottom:"18px",

  borderRadius:"10px",

  border:"1px solid #ccc",

  fontSize:"16px",

  boxSizing:"border-box",

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