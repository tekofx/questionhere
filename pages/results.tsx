import { Grid, Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
interface ResultsProps {
  answers: Array<number>;
}

export default function Results({ answers }: ResultsProps) {
  const router = useRouter();
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
            {router.query.answers.map((answer: number) => (
              <Typography variant="h4" component="h1" gutterBottom>
                {answer}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
