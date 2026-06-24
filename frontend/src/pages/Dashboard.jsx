import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import LeadTable from "../components/LeadTable";

import {

  getLeads,

  exportExcel,

} from "../services/api";

export default function Dashboard() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {

    loadLeads();

  }, []);

  const loadLeads = async () => {

    try {

      const response = await getLeads();

      setLeads(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const downloadExcel = () => {

    exportExcel();

  };

  const totalLeads = leads.length;

  const newLeads = leads.filter(

    (lead) =>

      lead.status === "New"

  ).length;

  const contactedLeads = leads.filter(

    (lead) =>

      lead.status === "Contacted"

  ).length;

  const convertedLeads = leads.filter(

    (lead) =>

      lead.status === "Converted"

  ).length;

  return (

    <div

      style={{

        background:

        "linear-gradient(to bottom,#eef2ff,#f8fafc)",

        minHeight:"100vh",

      }}

    >

      <Navbar />

      <div

        style={{

          width:"100%",

          maxWidth:"1400px",

          margin:"auto",

          padding:"15px",

        }}

      >

        <h1

          style={{

            textAlign:"center",

            fontSize:"clamp(30px,5vw,48px)",

            lineHeight:"1.1",

            marginBottom:"25px",

          }}

        >

          🚀 Akar LeadMaster Pro CRM

        </h1>

        <div

          style={{

            display:"grid",

            gridTemplateColumns:

            "repeat(auto-fit,minmax(280px,1fr))",

            gap:"20px",

            alignItems:"center",

            background:

            "linear-gradient(135deg,#2563eb,#9333ea)",

            padding:"20px",

            borderRadius:"25px",

            color:"#fff",

            marginBottom:"30px",

          }}

        >

          <div

            style={{

              textAlign:"center",

            }}

          >

            <h2>

              👋 Welcome Back, Manager

            </h2>

            <p>

              Monitor your business performance.

            </p>

            <p>

              Track leads and customers.

            </p>

            <p>

              Grow your business.

            </p>

          </div>

          <img

            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"

            alt="dashboard"

            style={{

              width:"100%",

              maxWidth:"350px",

              margin:"auto",

              borderRadius:"20px",

            }}

          />

        </div>

        <div

          style={{

            display:"grid",

            gridTemplateColumns:

            "repeat(auto-fit,minmax(150px,1fr))",

            gap:"15px",

          }}

        >

          <div style={cardStyle}>

            <h3>

              📋 Total Leads

            </h3>

            <h1>

              {totalLeads}

            </h1>

          </div>

          <div style={cardStyle}>

            <h3>

              🆕 New Leads

            </h3>

            <h1>

              {newLeads}

            </h1>

          </div>

          <div style={cardStyle}>

            <h3>

              📞 Contacted

            </h3>

            <h1>

              {contactedLeads}

            </h1>

          </div>

          <div style={cardStyle}>

            <h3>

              🎯 Converted

            </h3>

            <h1>

              {convertedLeads}

            </h1>

          </div>

        </div>

        <div

          style={{

            background:"#fff",

            marginTop:"35px",

            padding:"20px",

            borderRadius:"25px",

            overflowX:"auto",

          }}

        >

          <h2>

            📊 Recent Leads

          </h2>

          <hr />

          <br />

          <button

            onClick={downloadExcel}

            style={{

              width:"100%",

              maxWidth:"250px",

              padding:"12px",

              background:"#16a34a",

              color:"#fff",

              border:"none",

              borderRadius:"10px",

              cursor:"pointer",

              marginBottom:"20px",

            }}

          >

            🤖 AI Export Leads

          </button>

          <LeadTable />

        </div>

      </div>

    </div>

  );

}

const cardStyle = {

  background:"#fff",

  padding:"20px",

  minHeight:"160px",

  borderRadius:"20px",

  textAlign:"center",

  display:"flex",

  flexDirection:"column",

  justifyContent:"center",

  boxShadow:

  "0 10px 25px rgba(0,0,0,0.15)",

};