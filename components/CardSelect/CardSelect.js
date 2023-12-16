import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function CardSelect({ heading, description }) {
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
    <Card
      sx={{
        maxWidth: mobileScreenDetect ? "100%" : "50%",
        marginLeft: mobileScreenDetect ? "4px": "25%",
        marginRight: mobileScreenDetect ? "4px" : "25%",
        marginTop: "1em",
      }}
    >
      <CardMedia
        sx={{ height: 40 }}
        image="/building.jpg"
        title="Welcome to Registrations!"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "2em",
            fontWeight: "bolder",
            color: "var(--xiketic-black)",
          }}
        >
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
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
            router.push("/login");
          }}
        >
          Select
        </Button>
        <Button variant="outlined" size="large">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
