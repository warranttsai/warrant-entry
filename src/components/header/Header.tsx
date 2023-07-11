// modules
import { Toolbar, AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Button color="inherit" onClick={() => navigate("home")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("about-me")}>
          About Warrant
        </Button>
        <Button color="inherit" onClick={() => navigate("hobby")}>
          Hobby
        </Button>
        <Button color="inherit" onClick={() => navigate("learning-path")}>
          Learning Path
        </Button>
        <Button color="inherit" onClick={() => navigate("contact-with-me")}>
          Contact With Warrant
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
