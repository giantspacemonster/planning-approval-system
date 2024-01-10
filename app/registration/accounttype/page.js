"use client";
import CardSelect from "@/components/CardSelect/CardSelect";
import RegisterLayout from "../layout";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import RegFormContext from "../RegFormContext";
const cardForm = [
  {
    heading: "User/Signatory",
    description: `As a User/Signatory, play a pivotal role in elevating the security of your digital interactions. 
    As a primary user, you hold the key to seamlessly applying digital signatures to your documents, ensuring their 
    authenticity and integrity. By creating an account, you gain the power to initiate signature requests, download 
    signed files, and manage your personal information with ease. SecureSign puts you in control of your digital 
    security journey, empowering you to safeguard your documents and transactions with confidence. `,
    selection: "individualreg",
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
    selection: "organizationreg",
  },
];

export default function AccountTypeForm() {
  const router = useRouter();
  const { setFormData } = useContext(RegFormContext);
  const handleSubmit = (e, selection) => {
    e.preventDefault();
    setFormData({type: selection});
    router.push(`/registration/${selection}`);
  };
  return (
    <RegisterLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {cardForm.map((card, index) => (
          <div key={index}>
            <CardSelect
              heading={card.heading}
              description={card.description}
              selection={card.selection}
              handleClick={(e) => {
                handleSubmit(e, card.selection);
              }}
            />
          </div>
        ))}
      </div>
    </RegisterLayout>
  );
}
