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
          ABOUT
        </Button>
        <Button color="inherit" onClick={() => navigate("hobby")}>
          HOBBY
        </Button>
        <Button color="inherit" onClick={() => navigate("learning-path")}>
          LEARNING PATH
        </Button>
        <Button color="inherit" onClick={() => navigate("contact-with-me")}>
          CONTACT
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
