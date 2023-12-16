"use client";
import Form from "@/components/Form/Form";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const addressForm = {
  heading: "Address Details",
  description: `Your address is essential for precise identification
     of the property under consideration for building permit applications 
     and city planning. This information enables accurate record-keeping,
      correspondence related to your projects, and adherence to
       specific zoning regulations. Rest assured, we prioritize the
        security and confidentiality of your address information`,
  inputs: {
    address: {
      name: "Address Line 1",
      placeholder: "Enter Full Address",
      type: "text",
    },
    city: {
      name: "City",
      placeholder: "Enter City",
      type: "text",
    },
    state: {
      name: "State/Province/Region",
      placeholder: "Enter State/Province/Region",
      type: "text",
    },
    postalCode: {
      name: "Postal Code/ZIP Code",
      placeholder: "Enter Postal Code/ZIP Code",
      type: "number",
    },
    country: {
      name: "Country",
      placeholder: "Enter Country",
      type: "text",
    },
  },
};
export default function AddressForm() {
  const router = useRouter();
  const handleSubmit = (e) => {
    router.push("/registration/accounttype");
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
        formHeading={addressForm.heading}
        formDescription={addressForm.description}
        inputs={addressForm.inputs}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
