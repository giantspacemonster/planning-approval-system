"use client";
import Form from "@/components/Form/Form";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const personalForm = {
    heading: "Personal Details",
    description: `To enhance the user experience and ensure accurate 
    record-keeping, we request your name, gender, and age. This information
     is solely used for building permit applications and city planning processes,
      facilitating personalized communication, and complying with regulatory 
      requirements. Your privacy and data security are our top priorities.`,
    inputs: {
      firstname: {
        name: "First Name",
        placeholder: "Enter First Name",
        type: 'text'
      },
      lastname: {
        name: "Last Name",
        placeholder: "Enter Last Name",
        type: 'text'
      },
      gender: {
        name: "Gender",
        placeholder: "Enter Gender",
        type: 'select'
      },
      age: {
        name: "Age",
        placeholder: "Enter Age",
        type: 'number'
      },
    },
  };

export default function PersonalForm() {
  const router = useRouter();
  const handleSubmit = (e) => {
    router.push("/registration/address");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Form
        formHeading={personalForm.heading}
        formDescription={personalForm.description}
        inputs={personalForm.inputs}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
