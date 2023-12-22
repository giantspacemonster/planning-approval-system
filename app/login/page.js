"use client";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./login.module.css";
import TextInput from "@/components/TextInput/TextInput";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [mobileScreenDetect, setMobileScreenDetect] = useState(false);
  const [tabletScreenDetect, setTabletScreenDetect] = useState(false);
  useEffect(() => {
    if (window.visualViewport.width < 587) {
      setMobileScreenDetect(true);
    }
    if (window.visualViewport.width < 1025) {
      setTabletScreenDetect(true);
    }
  }, []);
  return (
    <div className={styles.mainContainer}>
      <form
        method="POST"
        action="/api/login"
        style={{
          width: "100%",
        }}
      >
        <Card
          sx={{
            maxWidth: tabletScreenDetect
              ? mobileScreenDetect
                ? "94%"
                : "100%"
              : "100%",
            width: tabletScreenDetect
              ? mobileScreenDetect
                ? "100%"
                : "75%"
              : "50%",
            marginLeft: tabletScreenDetect
              ? mobileScreenDetect
                ? "0"
                : "2%"
              : "25%",
            marginRight: tabletScreenDetect
              ? mobileScreenDetect
                ? "0"
                : "2%"
              : "25%",
            marginTop: mobileScreenDetect ? "0" : "1em",
          }}
        >
          <CardMedia
            sx={{ height: 340 }}
            image="/building.jpg"
            title="Welcome to Login!"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                position: "absolute",
                top: "4em",
                width: tabletScreenDetect
                  ? mobileScreenDetect
                    ? "90%"
                    : "95%"
                  : "50%",
                fontSize: mobileScreenDetect ? "2em" : "3em",
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
              type="sumbit"
              variant="contained"
              size="large"
              sx={{
                background: "var(--pine-green)",
                fontWeight: "bolder",
                "&: hover": {
                  background: "var(--fresh-green)",
                },
              }}
            >
              Sign In
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}
