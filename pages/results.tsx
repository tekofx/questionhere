import { Grid, Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Answers from "../data/answers.json";
import { useState } from "react";
interface ResultsProps {
  answers: Array<number>;
}

export default function Results() {
  const router = useRouter();
  const [note, setNote] = useState(0);
  const [group, setGroup] = useState("");
  const result = router.query.result;

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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              Results
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              You are {result}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
