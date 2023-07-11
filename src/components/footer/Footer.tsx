// modules
import { AppBar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      position="static"
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1" color="inherit">
        Thank you for visiting my website!
      </Typography>
    </AppBar>
  );
}
