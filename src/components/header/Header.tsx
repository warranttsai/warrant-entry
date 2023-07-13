// modules
import { Toolbar, AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Button color="inherit" onClick={() => navigate("home")}>
          HOME
        </Button>
        <Button color="inherit" onClick={() => navigate("about-me")}>
          ABOUT ME
        </Button>
        <Button color="inherit" onClick={() => navigate("my-majority")}>
          MY MAJORITY
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
