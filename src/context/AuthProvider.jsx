// context/AuthProvider.js
import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

const [detailInformation, setDetailInformation] = useState(
  {
    name: "",
    description: "",
    profilePic: "",
    cover: "",
    services: [],
  }
)


  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

  // Optional: Load existing user on refresh
useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const tempUser = JSON.parse(localStorage.getItem("tempUser"));

  if (storedUser) {
    setUser(storedUser);
  }

  // If tempUser exists, allow ProtectedRoute to use it (even though we don't set user here)
  if (!storedUser && tempUser) {
    // Optional: You can use tempUser in UI if needed
  }

  setLoading(false);
}, []);


  const handleLogin = () => {
    if (!formData?.email || !formData?.password) {
      toast.error("Email and password are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) =>
        user.email === formData.email.trim() &&
        user.password === formData.password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setUser(foundUser);
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setFormData({
      name: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
    });
    setUser(null);
    toast.success("Logout successful");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ formData, setFormData, handleLogin, logout, user, setUser,
         loading, detailInformation, setDetailInformation }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
