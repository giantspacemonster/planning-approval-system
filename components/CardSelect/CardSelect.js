import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardSelect({ heading, description }) {
  return (
    <Card
      sx={{
        maxWidth: "50%",
        marginLeft: "25%",
        marginRight: "25%",
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
            const element = document.getElementById("email");
            console.log(element);
            router.push("/registration/verification");
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
