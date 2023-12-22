"use client";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import styles from "./verification.module.css";
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
  const handleSubmit = (e) => {
    router.push("/registration/password");
  };
  const router = useRouter();
  return (
    <div
      className={styles.verificationForm}
    >
      <RegistrationForm
        formHeading={verificationForm.heading}
        formDescription={verificationForm.description}
        inputs={verificationForm.inputs}
        required={true}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
