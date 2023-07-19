// modules
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "60px",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography variant="body1" color="inherit">
        @2023
      </Typography>
    </footer>
  );
}
