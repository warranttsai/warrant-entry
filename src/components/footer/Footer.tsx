// modules
import { Button } from "@mui/material";
// style-compo
import { FlexRowCenteredContainer } from "../styled-component/Container";

export default function Footer() {
  return (
    <footer
      id="footer-container"
      className="d-flex flex-1  flex-column justify-contnet-center align-items-center w-100"
      style={{
        backgroundColor: "#1976d2",
        color: "white",
        paddingBlock: 10,
      }}
    >
      <span>💪😊👍</span>
      <FlexRowCenteredContainer
        style={{
          flexWrap: "wrap",
          gap: 5,
          paddingInline: "20vw",
        }}
      >
        <Button
          className="flex-1 button-hover-blue"
          style={{ width: 100, maxWidth: 100, background: "grey" }}
          size="small"
          variant="contained"
          data-testid="linedin-button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/warrant-tsai-20463414b/",
              "_blank"
            )
          }
        >
          LinkedIn
        </Button>
        <Button
          className="flex-1 button-hover-blue"
          style={{ width: 100, maxWidth: 100, background: "grey" }}
          size="small"
          variant="contained"
          color="success"
          data-testid="instagram-button"
          onClick={() =>
            window.open(
              "https://www.instagram.com/warrant_job_hunting/",
              "_blank"
            )
          }
        >
          Instagram
        </Button>
        <Button
          className="flex-1 button-hover-blue"
          style={{ width: 100, maxWidth: 100, background: "grey" }}
          size="small"
          variant="contained"
          color="success"
          data-testid="facebook-button"
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100007257571234",
              "_blank"
            )
          }
        >
          Facebook
        </Button>
      </FlexRowCenteredContainer>
    </footer>
  );
}
