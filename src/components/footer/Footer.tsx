// modules
import { Button, Typography } from "@mui/material";
// style-compo
import { FlexRowCenteredContainer } from "../styled-component/Container";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography variant="body1" color="inherit">
        <br />
        <div>💪😊👍</div>
        <FlexRowCenteredContainer
          style={{
            flexWrap: "wrap",
            gap: 5,
            paddingInline: "20vw",
            paddingBlock: 10,
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
      </Typography>
    </footer>
  );
}
