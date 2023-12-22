import { Button, MenuItem, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Inter } from "next/font/google";
import toast from "react-hot-toast";
import styles from "./RegistrationForm.module.css";
import TextInput from "../TextInput/TextInput";

// using sanitize from DOMPurify because we use dangerouslySetInnerHTML react prop
// which has XSS vulnerabilities if the HTML element uses event handlers
import { sanitize } from "isomorphic-dompurify";

import NumericInput from "../NumericInput/NumericInput";
const inter = Inter({ subsets: ["latin"] });
export default function Form({
  formHeading,
  formDescription,
  inputs = [],
  required,
  handleSubmit,
}) {
  // [variable : areInputsValid] is an Object which shall have all the form input id as keys
  // and its corresponding values are either true or false. This variable is used to check if
  // all the inputs are valid or not in one go, since the Form Component takes in all its input
  // fields as a prop, the validity of each field can be checked by using a switch case on the
  // respective key on each element, but in case an input field is untouched, its validations are
  // never triggered. This is where areInputsValid Object comes into play.
  const areInputsValid = {};

  // [function : handleInputValidations] triggers when value changes in an input field(React onChange event)
  const handleInputValidation = (e) => {
    const element = e.target;
    const id = element.id;
    areInputsValid[id] = false;

    // [function : styleChange)] is used to change the border-bottom color to red or green
    // depending on the validity of the respective input.
    function styleChange(styleType) {
      if (styleType) {
        element.style.borderBottom = "2px solid var(--pine-green)";
        element.style.borderRadius = "4px";
      } else {
        element.style.borderBottom = "2px solid var(--fiery-rose)";
        element.style.borderRadius = "4px";
      }
    }

    switch (id) {
      case "email":
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const isValid = emailRegex.test(element.value);
        if (!isValid) {
          toast.dismiss();
          toast.error("Invalid e-mail address", {
            id: id,
          });
          areInputsValid[id] = false;
          styleChange(false);
        } else {
          toast.dismiss();
          toast.success("Email Validated", {
            id: id,
          });
          areInputsValid[id] = true;
          styleChange(true);
        }
        break;
      case "phone":
        const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        const isPhoneValid = phoneRegex.test(element.value);

        if (!isPhoneValid) {
          toast.dismiss();
          toast.error("Invalid Phone Number", {
            id: id,
          });
          areInputsValid[id] = false;
          styleChange(false);
        } else {
          toast.dismiss();
          toast.success("Phone Number Validated", {
            id: id,
          });
          areInputsValid[id] = true;
          styleChange(true);
        }
        break;
      case "password":
        const hasUpperAlphaRegex = new RegExp(/[A-Z]/);
        const hasLowerAlphaRegex = new RegExp(/[a-z]/);
        const hasNumRegex = new RegExp(/[0-9]/);
        const hasSpecialCharsRegex = new RegExp(
          /[!@#%^&*()_+-=[\]{}|;':\",.\/<>?~`]/
        );
        var hasUpperAlpha = 0;
        var hasLowerAlpha = 0;
        var hasNum = 0;
        var hasSpecalChars = 0;
        password = element.value;
        // Check if the password length is at minimum 8 characters
        if (password.length < 8) {
          toast.dismiss();
          toast.error("Password should have at least 8 characters.", {
            id: id,
          });
          areInputsValid[id] = false;
          styleChange(false);
        } else {
          // Check if the password passes 3 out of four criteria
          if (hasUpperAlphaRegex.test(password)) {
            hasUpperAlpha = 1;
          }
          if (hasLowerAlphaRegex.test(password)) {
            hasLowerAlpha = 1;
          }
          if (hasNumRegex.test(password)) {
            hasNum = 1;
          }
          if (hasSpecialCharsRegex.test(password)) {
            hasSpecalChars = 1;
          }
          // If flag is greater than equal to 3, the password passes 3 out of 4 criteria
          const flag = hasLowerAlpha + hasUpperAlpha + hasNum + hasSpecalChars;
          if (flag >= 3) {
            toast.dismiss();
            toast.success(`The password is strong enough`, { id: id });
            areInputsValid[id] = true;
            styleChange(true);
          }
          if (flag < 3) {
            toast.dismiss();
            toast.error(
              "Password should have at least one uppercase letter, one lowercase letter, and one numeric character or symbol.",
              { id: id }
            );
            areInputsValid[id] = false;
            styleChange(false);
          }
        }
        break;
      case "confirmPassword":
        password = document.getElementById("password");
        if (element.value == password.value) {
          toast.dismiss();
          toast.success("Passwords match!");
          areInputsValid[id] = true;
          styleChange(true);
        } else {
          toast.dismiss();
          areInputsValid[id] = false;
          toast.error("Passwords do not match!", { id: id });
          styleChange(false);
        }
        break;
      case "firstname":
      case "lastname":
        const nameRegex = /^[A-Za-z-' ]{2,50}$/;
        if (!nameRegex.test(element.value)) {
          toast.dismiss();
          toast.error(`Invalid Name`, { id: id });
          areInputsValid[id] = false;
          styleChange(false);
        } else {
          toast.dismiss();
          toast.success(`Name Validated`, { id: id });
          areInputsValid[id] = true;
          styleChange(true);
        }
        break;
      case "age":
        const ageRegex = /^[1-9][0-9]{0,2}$/;
        if (!ageRegex.test(element.value)) {
          toast.dismiss();
          toast.error("Invalid Age", { id: id });
          areInputsValid[id] = false;
          styleChange(false);
        } else {
          toast.dismiss();
          toast.success("Age Validated", { id: id });
          areInputsValid[id] = true;
          styleChange(true);
        }
        break;
      case "state":
      case "city":
      case "address":
      case "country":
        const cityRegex = /^[A-Za-z-' ]{2,255}$/;
        if (!cityRegex.test(element.value)) {
          toast.dismiss();
          toast.error("Looks invalid!", { id: id });
          areInputsValid[id] = false;
          styleChange(false);
        } else {
          toast.dismiss();
          toast.success("Looks valid!", { id: id });
          areInputsValid[id] = true;
          styleChange(true);
        }
        break;
      case "postalCode":
        const pincodeRegex = /^[1-9][0-9]{5}$/;
        if (!pincodeRegex.test(element.value)) {
          toast.dismiss();
          toast.error("Please enter a valid postal code", { id: id });
          areInputsValid[id] = false;
          styleChange(false);
        } else {
          toast.dismiss();
          toast.success("Postal code Validated", { id: id });
          areInputsValid[id] = true;
          styleChange(true);
        }
    }
  };
  return (
    <div className={styles.formContainer}>
      <div
        className={inter.className}
        style={{
          padding: "1em",
        }}
      >
        <p
          style={{
            fontSize: "2.5em",
            fontWeight: "bold",
          }}
        >
          {formHeading}
        </p>
        <div
          style={{
            fontSize: "1em",
            textAlign: "justify",
          }}
          dangerouslySetInnerHTML={{__html: sanitize(formDescription)}}
        />
      </div>
      <hr />
      <form
        style={{
          padding: "1em",
        }}
      >
        {Object.keys(inputs).map((key) => (
          <div key={key}>
            {inputs[key].type === "text" || inputs[key].type === "password" ? (
              <div>
                <TextInput
                  label={inputs[key].name}
                  id={key}
                  placeholder={inputs[key].placeholder}
                  type={inputs[key].type}
                  validation={handleInputValidation}
                  required={required}
                />
                <br />
              </div>
            ) : null}
            {inputs[key].type === "number" ? (
              <NumericInput
                label={inputs[key].name}
                id={key}
                placeholder={inputs[key].placeholder}
                type={inputs[key].type}
                validation={handleInputValidation}
                required={required}
              />
            ) : null}
            {inputs[key].type === "select" ? (
              <div key={key}>
                <InputLabel id={key}>{inputs[key].name}</InputLabel>
                <Select
                  labelId={key}
                  id={key}
                  label={inputs[key].name}
                  sx={{ width: "100%" }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </div>
            ) : null}
          </div>
        ))}
        <br />
        <Button
          variant="contained"
          id="submit-button"
          type="submit"
          sx={{
            width: "50%",
            marginTop: "3em",
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "3em",
            background: "var(--fresh-green)",
          }}
          onClick={(e) => {
            let isFilled = [];
            Object.keys(inputs).map((key) => {
              const element = document.getElementById(key);
              // console.log(element.value == "");
              if (element.value == "") {
                toast(`Empty value at ${key} field.`, { id: key });
                isFilled.push(false);
              } else {
                isFilled.push(true);
              }
            });
            console.log("checking isFilled: ", isFilled);

            if (isFilled.includes(false)) {
              e.preventDefault();
            } else {
              Object.keys(areInputsValid).map((key) => {
                if (!areInputsValid[key]) {
                  toast(
                    `The ${key} field is invalid. Please recheck your submission!`
                  );
                  e.preventDefault();
                }
              });
              if (!Object.values(areInputsValid).includes(false)) {
                handleSubmit(e);
              }
            }
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
