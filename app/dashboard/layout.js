"use client";
import { useEffect, useState } from "react";
import UserContext from "../UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const [userData, setUserData] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();
      // console.log(user.isJWT);
      if (error || !user.isJWT) {
        push("/");
        return;
      }
      // if the error did not happen, if everything is alright
      setIsSuccess(true);
      setUserData(user);
    })();
  }, [push]);
  if (!isSuccess) {
    return <p>Loading...</p>;
  }
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
async function getUser() {
  //   console.log("CALLING GETUSER()");
  try {
    const { data } = await axios.get("/api/auth/user");
    // console.log(data);
    return {
      user: data,
      error: null,
    };
  } catch (e) {
    const error = e;

    return {
      user: null,
      error,
    };
  }
}
