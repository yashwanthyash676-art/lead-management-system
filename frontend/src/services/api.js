import axios from "axios";

const api = axios.create({

  baseURL: "/api",

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

    "/api/ai/export"

  );

export default api;