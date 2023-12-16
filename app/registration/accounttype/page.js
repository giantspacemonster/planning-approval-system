"use client";
import CardSelect from "@/components/CardSelect/CardSelect";
import Form from "@/components/Form/Form";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const cardForm = [
  {
    heading: "Citizen",
    description: `As a citizen registering with us, you play a pivotal role
     in shaping our community. Your participation enables seamless communication, 
     empowers you to access personalized services, and contributes to the collective 
     strength of our network. By completing the registration process, you join a community 
     committed to growth and collaboration. Thank you for being an essential part of our journey!`,
  },
  {
    heading: "Architect",
    description: `Your expertise is a valuable asset to our platform. By registering as an architect, 
    you unlock a suite of tools tailored to streamline your work. Submit and manage building plans, 
    collaborate with local authorities, and contribute to the development of sustainable and innovative 
    projects. Your role is integral to our shared vision of creating spaces that inspire. 
    Let's build together!`,
  },
  {
    heading: "Local Autority",
    description: `As a Local Authority registering with us, you are a vital part of our commitment to 
    efficient urban development. Your role includes overseeing and approving building permits, ensuring 
    compliance with local regulations, and contributing to the growth of our community. By joining us, 
    you facilitate transparent communication and decision-making processes that positively impact our 
    shared environment. Thank you for being a key partner in our journey toward responsible development.`,
  },
];

export default function AddressForm() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {cardForm.map((card, index) => (<div key={index}>
          <CardSelect heading={card.heading} description={card.description}/>
      </div>))}
    </div>
  );
}
