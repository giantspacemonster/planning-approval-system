"use client";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./registration.module.css";
import { useEffect, useState } from "react";
export default function Register() {
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
      <Card
        sx={{
          maxWidth: tabletScreenDetect
            ? mobileScreenDetect
              ? "94%"
              : "100%"
            : "100%",
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
            Welcome to Online Building and Planning Approval System
            Registration!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are excited to have you join our community. The registration
            process is quick and easy. By creating an account, you unlock access
            to personalized features and exclusive content. Please follow these
            steps to get started: <br />
            - Verification: Confirm your email and phone number to secure your
            account.
            <br />- Personal Details: Tell us a bit about yourself. Your
            information is kept private and helps us tailor your experience.
            <br />- Address: Provide your address for accurate service delivery
            and location-based features. <br />
            Thank you for choosing us. Let us make dreams come to life!
          </Typography>
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
              router.push("/registration/verification");
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={(e) => {
              router.push("/about");
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
