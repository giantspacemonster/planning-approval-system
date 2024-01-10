"use client";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import { useRouter } from "next/navigation";
import styles from "./individualreg.module.css";
import RegisterLayout from "../layout";
import { useContext } from "react";
import RegFormContext from "../RegFormContext";
const verificationForm = {
  heading: "VERIFICATION",
  description: `We need to verify your email address and phone number in order to
  proceed. This is to ensure registration from credible sources, your
  data will be safe with us and will not be shared with any third party
  organizations.`,
  inputs: {
    username: {
      name: "Username",
      placeholder: "Enter a unique username",
      type: "text",
    },
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
  const { formData, setFormData } = useContext(RegFormContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = formData;
    payload["email"] = e.currentTarget.email.value;
    payload["phone"] = e.currentTarget.phone.value;
    payload["username"] = e.currentTarget.username.value;
    payload["CreatedOn"] = new Date();
    payload["UpdatedOn"] = new Date();
    setFormData(payload);
    router.push(`/registration/address`);
  };
  return (
    <RegisterLayout>
      <div className={styles.verificationForm}>
        <RegistrationForm
          formHeading={verificationForm.heading}
          formDescription={verificationForm.description}
          inputs={verificationForm.inputs}
          required={true}
          handleSubmit={handleSubmit}
        />
      </div>
    </RegisterLayout>
  );
}
