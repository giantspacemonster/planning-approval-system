"use client";
import { useState } from "react";
import RegFormContext from "./RegFormContext";
export default function RegisterLayout({ children }) {
  const [formData, setFormData] = useState({});
  return (
    <RegFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </RegFormContext.Provider>
  );
}
