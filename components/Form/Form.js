import { Button, MenuItem, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Inter } from "next/font/google";
import toast from "react-hot-toast";
import TextInput from "../TextInput/TextInput";
import NumericInput from "../NumericInput/NumericInput";
const inter = Inter({ subsets: ["latin"] });
export default function Form({
  formHeading,
  formDescription,
  inputs = [],
  required,
  handleSubmit,
}) {
  const areInputsValid = {};
  const handleInputValidation = (e) => {
    const element = e.target;
    const id = element.id;
    areInputsValid[id] = false;

    switch (id) {
      case "email":
        // Regular expression to validate the email address
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const isValid = emailRegex.test(element.value);
        if (!isValid) {
          toast.dismiss();
          toast.error("That does not look like a valid email address", {
            id: id,
          });
          areInputsValid[id] = false;
          element.style.borderBottom = "2px solid var(--fiery-rose)";
          element.style.borderRadius = "4px";
        } else {
          toast.dismiss();
          toast.success("That is a good looking email right there!", {
            id: id,
          });
          areInputsValid[id] = true;
          element.style.borderBottom = "2px solid var(--pine-green)";
          element.style.borderRadius = "4px";
        }
        break;
      case "phone":
        const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        const isPhoneValid = phoneRegex.test(element.value);

        if (!isPhoneValid) {
          element.style.borderBottom = "2px solid var(--fiery-rose)";
          element.style.borderRadius = "4px";
          toast.dismiss();
          toast.error("That does not look like a valid phone number", {
            id: id,
          });
          areInputsValid[id] = false;
        } else {
          toast.dismiss();
          toast.success("That is a good looking phone number right there!", {
            id: id,
          });
          areInputsValid[id] = true;
          element.style.borderBottom = "2px solid var(--pine-green)";
          element.style.borderRadius = "4px";
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
          element.style.borderBottom = "2px solid var(--fiery-rose)";
          element.style.borderRadius = "4px";
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
          // If flag is greater than 3, the password passes 3 out of 4 criteria
          const flag = hasLowerAlpha + hasUpperAlpha + hasNum + hasSpecalChars;
          if (flag >= 3) {
            element.style.borderBottom = "2px solid var(--pine-green)";
            element.style.borderRadius = "4px";
            toast.dismiss();
            toast.success(
              `The password is strong enough, you can move along now!`,
              { id: id }
            );
            areInputsValid[id] = true;
          }
          if (flag < 3) {
            element.style.borderBottom = "2px solid var(--fiery-rose)";
            element.style.borderRadius = "4px";
            toast.dismiss();
            toast.error(
              "Password should have at least one uppercase letter, one lowercase letter, and one numeric character.",
              { id: id }
            );
            areInputsValid[id] = false;
          }
        }
        break;
      case "confirmPassword":
        password = document.getElementById("password");
        if (element.value == password.value) {
          toast.dismiss();
          toast.success("Passwords match!");
          areInputsValid[id] = true;
          element.style.borderBottom = "2px solid var(--pine-green)";
          element.style.borderRadius = "4px";
        } else {
          toast.dismiss();
          areInputsValid[id] = false;
          toast.error("Passwords do not match!", { id: id });
          element.style.borderBottom = "2px solid var(--fiery-rose)";
          element.style.borderRadius = "4px";
        }
        break;
      case "firstname":
      case "lastname":
        const nameRegex = /^[A-Za-z-' ]{2,50}$/;
        if (!nameRegex.test(element.value)) {
          toast.dismiss();
          toast.error(`Is that really your name?`, { id: id });
          areInputsValid[id] = false;
          element.style.borderBottom = "2px solid var(--fiery-rose)";
          element.style.borderRadius = "4px";
        } else {
          toast.dismiss();
          toast.success(`Username checks out`, { id: id });
          areInputsValid[id] = true;
          element.style.borderBottom = "2px solid var(--pine-green)";
          element.style.borderRadius = "4px";
        }
        break;
      case "age":
        const ageRegex = /^[1-9][0-9]{0,2}$/;
        if (!ageRegex.test(element.value)) {
          toast.dismiss();
          toast.error("That doesn't look like a valid age.", { id: id });
          areInputsValid[id] = false;
          element.style.borderBottom = "2px solid var(--fiery-rose)";
          element.style.borderRadius = "4px";
        } else {
          toast.dismiss();
          toast.success("Age Validated", { id: id });
          areInputsValid[id] = true;
          element.style.borderBottom = "2px solid var(--pine-green)";
          element.style.borderRadius = "4px";
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
          element.style.borderBottom = "2px solid var(--fiery-rose)";
          element.style.borderRadius = "4px";
        } else {
          toast.dismiss();
          toast.success("Looks valid!", { id: id });
          areInputsValid[id] = true;
          element.style.borderBottom = "2px solid var(--pine-green)";
          element.style.borderRadius = "4px";
        }
        break;
      case "postalCode":
        const pincodeRegex = /^[1-9][0-9]{5}$/;
        if (!pincodeRegex.test(element.value)) {
          toast.dismiss();
          toast.error("Please enter a valid postal code", { id: id });
          areInputsValid[id] = false;
          element.style.borderBottom = "2px solid var(--fiery-rose)";
          element.style.borderRadius = "4px";
        } else {
          toast.dismiss();
          toast.success("Postal code looks good!", { id: id });
          areInputsValid[id] = true;
          element.style.borderBottom = "2px solid var(--pine-green)";
          element.style.borderRadius = "4px";
        }
    }
  };
  return (
    <div
      className="container"
      style={{
        borderBottom: "1px solid var(--xiketic-black)",
        padding: "20px",
        margin: "3em",
        display: "grid",
        gridTemplateColumns: "45% 5% 45%",
      }}
    >
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
        <p
          style={{
            fontSize: "1em",
            textAlign: "justify",
          }}
        >
          {formDescription}
        </p>
      </div>
      <hr />
      <div
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
                  <MenuItem value="">Select Gender</MenuItem>
                  <MenuItem value="MALE">Male</MenuItem>
                  <MenuItem value="FEMALE">Female</MenuItem>
                  <MenuItem value="OTHERS">Others</MenuItem>
                </Select>
              </div>
            ) : null}
          </div>
        ))}
        <br />
        <Button
          variant="contained"
          id="submit-button"
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
              console.log(element.value == "");
              if ((element.value == "")) {
                toast(`Empty value at ${key} field.`);
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
      </div>
    </div>
  );
}
