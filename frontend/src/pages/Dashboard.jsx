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

          padding:"30px",

        }}

      >

        <h1

          style={{

            textAlign:"center",

            fontSize:"48px",

            marginBottom:"25px",

          }}

        >

          🚀 Akar LeadMaster Pro CRM

        </h1>

        <div

          style={{

            display:"flex",

            justifyContent:

            "space-between",

            alignItems:"center",

            background:

            "linear-gradient(135deg,#2563eb,#9333ea)",

            borderRadius:"25px",

            padding:"35px",

            color:"#fff",

            marginBottom:"35px",

          }}

        >

          <div>

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

              width:"350px",

              borderRadius:"25px",

            }}

          />

        </div>

        <div

          style={{

            display:"grid",

            gridTemplateColumns:

            "repeat(4,1fr)",

            gap:"25px",

          }}

        >

          <div style={cardStyle}>

            <h3>📋 Total Leads</h3>

            <h1>{totalLeads}</h1>

          </div>

          <div style={cardStyle}>

            <h3>🆕 New Leads</h3>

            <h1>{newLeads}</h1>

          </div>

          <div style={cardStyle}>

            <h3>📞 Contacted</h3>

            <h1>{contactedLeads}</h1>

          </div>

          <div style={cardStyle}>

            <h3>🎯 Converted</h3>

            <h1>{convertedLeads}</h1>

          </div>

        </div>

        <div

          style={{

            background:"#fff",

            marginTop:"40px",

            padding:"30px",

            borderRadius:"25px",

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

  padding:"30px",

  borderRadius:"25px",

  textAlign:"center",

  boxShadow:

  "0 15px 30px rgba(0,0,0,0.15)",

};