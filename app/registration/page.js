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
            Welcome to SecureSign
            <br />
            Registrations!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your Gateway to Seamless and Secure Digital Signatures! To embark on
            your journey with us, please take a moment to complete the
            registration process. Your digital security is our top priority, and
            providing accurate information will help us tailor our services to
            your unique needs. <br /><br/>
            Kindly fill in the fields below with details such as your preferred
            username, secure password, designation, department, valid email
            address, mobile number, and official address. <br /><br/>
            This information ensures a personalized experience and helps us
            maintain the highest standards of identity verification. Rest
            assured, all your data will be handled with the utmost care and in
            compliance with stringent security measures. Thank you for choosing
            SecureSign.io – where your digital security is our commitment.
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
