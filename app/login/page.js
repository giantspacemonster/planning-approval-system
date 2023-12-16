"use client";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form from "@/components/Form/Form";
import TextInput from "@/components/TextInput/TextInput";

const loginForm = {
  heading: "Login",
  description: `Let's log you into our system, please provide 
    your email, or phone number and password`,
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
    password: {
      name: "Password",
      placeholder: "Enter your Password",
      type: "password",
    },
  },
};
export default function Login() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: "50%",
          marginLeft: "25%",
          marginRight: "25%",
          marginTop: "1em",
        }}
      >
        <CardMedia
          sx={{ height: 340 }}
          image="/building.jpg"
          title="Welcome to Registrations!"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              position: "absolute",
              top: "4em",
              width: "50%",
              fontSize: "3em",
              fontWeight: "bolder",
              color: "var(--xiketic-black)",
            }}
          >
            Welcome to Online Building and Planning Approval System Login!
          </Typography>
          <TextInput
            label={"Email"}
            id={"email"}
            placeholder={"Enter Your Email"}
            type={"email"}
            validation={(e) => {
              console.log("Logging In...");
            }}
            required={true}
          />
          <TextInput
            label={"Password"}
            id={"password"}
            placeholder={"Enter Your Password"}
            type={"password"}
            validation={(e) => {
              console.log("Logging In...");
            }}
            required={true}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "var(--pine-green)",
              fontWeight: "bolder",
              "&: hover": {
                background: "var(--fresh-green)",
              },
            }}
            onClick={(e) => {
              router.push("/");
            }}
          >
            Sign In
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
