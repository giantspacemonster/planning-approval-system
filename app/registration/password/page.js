"use client";
import Form from "@/components/Form/Form";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const setPasswordForm = {
  heading: "SET PASSWORD",
  description: `Password Requirements:- Your password must have a minimum of 8 characters 
  containing at least 3 of the following: - Must include Lowercase characters.
   - Must include Uppercase characters. - Must include Numbers (0-9).
    - Must include Symbols`,
  inputs: {
    password: {
      name: "Password",
      placeholder: "Enter Password",
      type: "password",
    },
    confirmPassword: {
      name: "Confirm Password",
      placeholder: "Retype your Password",
      type: "password",
    },
  },
};
export default function PasswordForm() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Form
        formHeading={setPasswordForm.heading}
        formDescription={setPasswordForm.description}
        inputs={setPasswordForm.inputs}
      />

      <Button
        variant="contained"
        sx={{
          width: "auto",
          marginLeft: "38%",
          marginRight: "42%",
          marginBottom: "3em",
        }}
        onClick={(e) => {
          const element = document.getElementById("email");
          console.log(element);
          router.push("/registration/personal");
        }}
      >
        Submit
      </Button>
    </div>
  );
}
