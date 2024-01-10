"use client";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import RegFormContext from "../RegFormContext";
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
  const searchParams = useSearchParams();
  const { formData, setFormData } = useContext(RegFormContext);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = formData;
    payload["address"] = e.currentTarget.address.value;
    payload["city"] = e.currentTarget.city.value;
    payload["state"] = e.currentTarget.state.value;
    payload["postalCode"] = e.currentTarget.postalCode.value;
    payload["country"] = e.currentTarget.country.value;
    setFormData(payload);
    console.log(formData)
    // try {
    //   const res = await fetch("/api/register/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //   });
    //   console.log(res);
    // } catch (e) {
    //   console.log(e.message);
    // }

    // router.push("/registration/accounttype");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <RegistrationForm
        formHeading={addressForm.heading}
        formDescription={addressForm.description}
        inputs={addressForm.inputs}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
