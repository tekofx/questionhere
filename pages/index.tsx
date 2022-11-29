import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import config from "../data/config.json";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Question Here!
        </Typography>
        <Typography>{config.description}</Typography>
        <Box maxWidth="sm">
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/questions"
          >
            Begin questionaire
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
