// modules
import { Toolbar, AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          onClick={() => navigate("home")}
          sx={{ marginRight: "auto", fontSize: "25px", padding: "0" }}
        >
          🏡
        </Button>
        <Button color="inherit" onClick={() => navigate("about-me")}>
          ABOUT ME
        </Button>
        <Button color="inherit" onClick={() => navigate("learning-path")}>
          LEARNING PATH
        </Button>
        <Button color="inherit" onClick={() => navigate("my-hobbies")}>
          MY HOBBIES
        </Button>
        <Button color="inherit" onClick={() => navigate("working-experience")}>
          WORKING EXPERIENCE
        </Button>
        <Button color="inherit" onClick={() => navigate("contact-with-me")}>
          CONTACT WITH ME
        </Button>
        <Button color="inherit" onClick={() => navigate("lab")}>
          Labratory
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
