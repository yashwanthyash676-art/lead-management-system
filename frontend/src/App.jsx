import {

  BrowserRouter,

  Routes,

  Route,

} from "react-router-dom";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";

import AddLead from "./pages/AddLead";

import EditLead from "./pages/EditLead";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route

          path="/"

          element={<Login />}

        />

        <Route

          path="/signup"

          element={<Signup />}

        />

        <Route

          path="/dashboard"

          element={<Dashboard />}

        />

        <Route

          path="/add-lead"

          element={<AddLead />}

        />

        <Route

          path="/edit-lead/:id"

          element={<EditLead />}

        />

      </Routes>

    </BrowserRouter>

  );

}