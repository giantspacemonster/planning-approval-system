'use client'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [mobileScreenDetect, setMobileScreenDetect] = useState(false);
  const [tabletScreenDetect, setTabletScreenDetect] = useState(false);
  useEffect(() => {
    if (window.visualViewport.width < 587) {
      setMobileScreenDetect(true)
    }
    if (window.visualViewport.width < 1025) {
      setTabletScreenDetect(true);
    }
  }, []);
  return (
    <AppBar
      position="fixed"
      style={{
        background: "var(--fresh-green)",
        width: "100vw",
        left: 0,
      }}
    >
      <Toolbar>
        <Link
          href="/"
          style={{
            color: "#FFF",
            textDecoration: "none",
            paddingLeft: "12px",
          }}
        >
          <Tooltip title="Home">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <AccountBalanceIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {mobileScreenDetect
            ? "Secure Sign "
            : "Secure Digital Signature Service"}
        </Typography>
        <Link
          href="login"
          style={{
            color: "#FFF",
          }}
          prefetch={true}
        >
          <Button
            sx={{
              color: "#FFF",
              ":hover": {
                background: "var(--dark-jungle-green)",
              },
            }}
          >
            Login
          </Button>
        </Link>
        <Link
          href="/registration"
          style={{
            color: "#FFF",
          }}
          prefetch={false}
        >
          <Button color="inherit">Register</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
