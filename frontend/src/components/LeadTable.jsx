import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {

  getLeads,

  deleteLeadApi,

} from "../services/api";

export default function LeadTable() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [leads, setLeads] = useState([]);

  const [loading, setLoading] = useState(true);

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

      alert("Unable to load leads");

    }

    finally {

      setLoading(false);

    }

  };

  const deleteLead = async (id) => {

    if (

      window.confirm(

        "Delete this lead?"

      )

    ) {

      try {

        await deleteLeadApi(id);

        loadLeads();

      }

      catch (error) {

        alert("Delete failed");

      }

    }

  };

  const filteredLeads = leads.filter(

    (lead) => {

      const searchMatch =

        lead.name

          .toLowerCase()

          .includes(

            search.toLowerCase()

          )

        ||

        lead.email

          .toLowerCase()

          .includes(

            search.toLowerCase()

          )

        ||

        lead.phone.includes(

          search

        )

        ||

        lead.company

          .toLowerCase()

          .includes(

            search.toLowerCase()

          );

      const filterMatch =

        filter === "All"

        ||

        lead.status === filter;

      return (

        searchMatch

        &&

        filterMatch

      );

    }

  );

  if (loading) {

    return <h3>Loading...</h3>;

  }

  return (

    <div>

      <input

        placeholder="🔍 Search Client"

        value={search}

        onChange={(e)=>

          setSearch(

            e.target.value

          )

        }

        style={inputStyle}

      />

      <div

        style={filterContainer}

      >

        <button

          style={filterButton}

          onClick={()=>

            setFilter("All")

          }

        >

          All

        </button>

        <button

          style={filterButton}

          onClick={()=>

            setFilter("New")

          }

        >

          New

        </button>

        <button

          style={filterButton}

          onClick={()=>

            setFilter(

              "Contacted"

            )

          }

        >

          Contacted

        </button>

        <button

          style={filterButton}

          onClick={()=>

            setFilter(

              "Converted"

            )

          }

        >

          Converted

        </button>

      </div>

      <div

        style={tableContainer}

      >

        <table

          style={tableStyle}

        >

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Company</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

          {

          filteredLeads.length===0

          ?

          (

          <tr>

          <td

          colSpan="6"

          style={emptyStyle}

          >

          ❌ No client found

          </td>

          </tr>

          )

          :

          (

          filteredLeads.map(

          (lead)=>(

          <tr

          key={lead._id}

          >

          <td>{lead.name}</td>

          <td>{lead.email}</td>

          <td>{lead.phone}</td>

          <td>{lead.company}</td>

          <td>{lead.status}</td>

          <td>

          <div

          style={actionContainer}

          >

          <button

          onClick={()=>

          navigate(

          `/edit-lead/${lead._id}`

          )

          }

          style={editButton}

          >

          Edit

          </button>

          <button

          onClick={()=>

          deleteLead(

          lead._id

          )

          }

          style={deleteButton}

          >

          Delete

          </button>

          </div>

          </td>

          </tr>

          )

          )

          )

          }

          </tbody>

        </table>

      </div>

    </div>

  );

}

const inputStyle = {

  width:"100%",

  padding:"12px",

  marginBottom:"20px",

  borderRadius:"10px",

  border:"1px solid #ccc",

  boxSizing:"border-box",

};

const filterContainer = {

  display:"flex",

  flexWrap:"wrap",

  gap:"10px",

  marginBottom:"20px",

};

const filterButton = {

  flex:"1",

  minWidth:"120px",

  padding:"10px",

  border:"none",

  borderRadius:"8px",

  background:"#2563eb",

  color:"#fff",

  cursor:"pointer",

};

const tableContainer = {

  overflowX:"auto",

};

const tableStyle = {

  width:"100%",

  borderCollapse:"collapse",

};

const actionContainer = {

  display:"flex",

  flexWrap:"wrap",

  gap:"10px",

};

const editButton = {

  background:"#16a34a",

  color:"#fff",

  border:"none",

  padding:"8px 15px",

  borderRadius:"8px",

  cursor:"pointer",

};

const deleteButton = {

  background:"#dc2626",

  color:"#fff",

  border:"none",

  padding:"8px 15px",

  borderRadius:"8px",

  cursor:"pointer",

};

const emptyStyle = {

  textAlign:"center",

  padding:"20px",

  color:"red",

  fontWeight:"bold",

};