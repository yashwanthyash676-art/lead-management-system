import axios from "axios";

const api = axios.create({

  baseURL: "http://localhost:5000/api",

});

export const getLeads = () =>

  api.get("/leads");

export const addLead = (data) =>

  api.post("/leads", data);

export const updateLead = (

  id,

  data

) =>

  api.put(

    `/leads/${id}`,

    data

  );

export const deleteLeadApi = (

  id

) =>

  api.delete(

    `/leads/${id}`

  );

export const registerUser = (

  data

) =>

  api.post(

    "/users/register",

    data

  );

export const getUsers = () =>

  api.get("/users");

export const exportExcel = () =>

  window.open(

    "http://localhost:5000/api/ai/export"

  );

export default api;