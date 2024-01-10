"use client";
import { useContext } from "react";
import UserContext from "../UserContext";
import DashboardLayout from "./layout";
import Copyright from "@/components/Copyright/Copyright";
export default function Dashboard() {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <DashboardLayout>
      Dashboard for {userData.user ? userData.user.value : null}
      <Copyright sx={{ pt: 4 }} />
    </DashboardLayout>
  );
}
