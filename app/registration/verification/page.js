"use client";
import Form from "@/components/Form/Form";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const verificationForm = {
  heading: "VERIFICATION",
  description: `We need to verify your email address and phone number in order to
  proceed. This is to ensure registration from credible sources, your
  data will be safe with us and will not be shared with any third party
  organizations.`,
  inputs: {
    email: {
      name: "Email Address",
      placeholder: "Enter Email Address",
      type: "text",
    },
    phone: {
      name: "Phone Number",
      placeholder: "Enter Phone Number",
      type: "number",
    },
  },
};
export default function VerificationForm() {
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
        formHeading={verificationForm.heading}
        formDescription={verificationForm.description}
        inputs={verificationForm.inputs}
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
          router.push("/registration/password");
        }}
      >
        Submit
      </Button>
    </div>
  );
}
