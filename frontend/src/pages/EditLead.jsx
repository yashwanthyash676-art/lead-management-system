import { useEffect, useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import api from "../services/api";

export default function EditLead() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [lead, setLead] = useState({

    name:"",

    email:"",

    phone:"",

    company:"",

    status:"New",

    notes:"",

  });

  useEffect(() => {

    loadLead();

  }, []);

  const loadLead = async () => {

    try {

      const response = await api.get(

        `/leads/${id}`

      );

      setLead(response.data);

    }

    catch (error) {

      alert(

        "Unable to load lead"

      );

    }

  };

  const handleChange = (e) => {

    setLead({

      ...lead,

      [e.target.name]:

      e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(

        `/leads/${id}`,

        lead

      );

      alert(

        "Lead Updated Successfully"

      );

      navigate(

        "/dashboard"

      );

    }

    catch (error) {

      alert(

        "Update failed"

      );

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

          ✏️ Edit Lead

        </h1>

        <form onSubmit={handleSubmit}>

          <input

            name="name"

            value={lead.name}

            onChange={handleChange}

            placeholder="Name"

            style={inputStyle}

          />

          <input

            name="email"

            value={lead.email}

            onChange={handleChange}

            placeholder="Email"

            style={inputStyle}

          />

          <input

            name="phone"

            value={lead.phone}

            onChange={handleChange}

            placeholder="Phone"

            style={inputStyle}

          />

          <input

            name="company"

            value={lead.company}

            onChange={handleChange}

            placeholder="Company"

            style={inputStyle}

          />

          <select

            name="status"

            value={lead.status}

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

            value={lead.notes}

            onChange={handleChange}

            placeholder="Notes"

            style={inputStyle}

          />

          <button

            style={buttonStyle}

          >

            💾 Update Lead

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

  border:"1px solid #ccc",

  borderRadius:"10px",

  fontSize:"16px",

  boxSizing:"border-box",

};

const buttonStyle = {

  width:"100%",

  padding:"14px",

  background:"#2563eb",

  color:"#fff",

  border:"none",

  borderRadius:"10px",

  cursor:"pointer",

  fontSize:"18px",

};