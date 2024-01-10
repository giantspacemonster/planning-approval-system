"use client";
import { useRouter } from "next/navigation";
import RegisterLayout from "../layout";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import CardSelect from "@/components/CardSelect/CardSelect";
import { useState } from "react";

const cardForm = [
  {
    heading: "User/Signatory",
    description: `As a User/Signatory, play a pivotal role in elevating the security of your digital interactions. 
      As a primary user, you hold the key to seamlessly applying digital signatures to your documents, ensuring their 
      authenticity and integrity. By creating an account, you gain the power to initiate signature requests, download 
      signed files, and manage your personal information with ease. SecureSign puts you in control of your digital 
      security journey, empowering you to safeguard your documents and transactions with confidence. `,
    selection: "registration/individualreg",
  },
  {
    heading: "Organization/Company",
    description: `As an Organization/Company User, you hold a key role in streamlining and securing digital signature 
      processes for your entire entity. SecureSign.io recognizes the unique needs of organizations and offers tailored 
      solutions for seamless integration into your workflow. By creating an account in the role of an Organization/Company 
      User, you gain access to a suite of features designed to enhance document security at the organizational level. 
      Manage multiple users, oversee signature requests, and ensure a standardized and secure approach to digital 
      signatures across your departments. SecureSign is your trusted partner in fortifying the integrity of your digital 
      transactions.`,
    selection: "registration/organizationreg",
  },
];
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
const setPasswordForm = {
  heading: "SET PASSWORD",
  description: `Password Requirements:- <br/>
    <ul>
      <h5>Your password must have a minimum of 8 characters </h5>
      And containing at least 3 of the following:
      <li>
        Must include Lowercase characters.
      </li>
      <li>
        Must include Numbers (0-9).
      </li>
      <li>
        Must include Symbols
      </li>
      <li>
        Must include Uppercase characters.
      </li>
    </ul>
  `,
  inputs: {
    passwords: {
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
export default function RegisterForm() {
  const [regData, setRegData] = useState({});
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);
  const handleSubmit = (e, selection) => {
    e.preventDefault();
    console.log(e.currentTarget);
    e.currentTarget.innerText = "SELECTED";
  };
  return (
    <RegisterLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3em",
            fontFamily: "monospace",
            borderBottom: "2px solid var(--fresh-green)",
            fontWeight: "bold",
          }}
        >
          Account Type
        </h1>
        {cardForm.map((card, index) => (
          <div key={index}>
            <CardSelect
              heading={card.heading}
              description={card.description}
              selection={card.selection}
              handleClick={(e) => {
                handleSubmit(e, card.selection);
              }}
              isSelected={isSelected}
            />
          </div>
        ))}
      </div>
      <RegistrationForm
        formHeading={verificationForm.heading}
        formDescription={verificationForm.description}
        inputs={verificationForm.inputs}
        required={true}
        handleSubmit={handleSubmit}
      />
      <RegistrationForm
        formHeading={setPasswordForm.heading}
        formDescription={setPasswordForm.description}
        inputs={setPasswordForm.inputs}
        handleSubmit={handleSubmit}
      />
    </RegisterLayout>
  );
}
