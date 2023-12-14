"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: "20%",
          marginLeft: "40%",
          marginRight: "40%",
          marginBottom: "3em",
        }}
        onClick={(e) => {
          const element = document.getElementById("email");
          console.log(element);
          router.push("/registration/verification");
        }}
      >
        Get Started
      </Button>
    </div>
  );
}
