"use client";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
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
export default function PasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = searchParams.get('query')
    console.log(JSON.parse(search));
    console.log(e.currentTarget.password)
    // router.push("/registration/personal");
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
        formHeading={setPasswordForm.heading}
        formDescription={setPasswordForm.description}
        inputs={setPasswordForm.inputs}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
