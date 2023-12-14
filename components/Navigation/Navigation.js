import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Tooltip } from "@mui/material";
import Link from "next/link";

export default function ButtonAppBar() {
  return (
    <AppBar
      position="fixed"
      style={{
        background: "var(--fresh-green)",
      }}
    >
      <Toolbar>
        <Link href='/' style={{
          color: '#FFF',
          textDecoration: 'none'
        }}>
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
          Online Building and Planning Approval System
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
