import axios from "./axios";

// 🔐 Login
export const loginCompanyUser = async (email, password) => {
  const response = await axios.post("/CompanyUser/login", { email, password });
  return response.data;
};

// 🆕 Register
export const registerCompanyUser = async (data) => {
  const response = await axios.post("/CompanyUser/register", data);
  return response.data;
};

// 👤 View own profile
export const getCompanyUserProfile = async () => {
  const response = await axios.get("/CompanyUser/profile");
  return response.data;
};

// 🧾 View all company users
export const getAllCompanyUsers = async () => {
  const response = await axios.get("/CompanyUser/all");
  return response.data;
};

// ✏️ Update company user
export const updateCompanyUser = async (id, data) => {
  const response = await axios.put(`/CompanyUser/update/${id}`, data);
  return response.data;
};

// ❌ Delete company user
export const deleteCompanyUser = async (id) => {
  const response = await axios.delete(`/CompanyUser/delete/${id}`);
  return response.data;
};
