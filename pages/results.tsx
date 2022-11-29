import { Grid, Container, Typography } from "@mui/material";
import ResultsCard from "../components/Card";
import { useRouter } from "next/router";
import Answers from "../data/answers.json";
interface ResultsProps {
  answers: Array<number>;
}

export default function Results() {
  const router = useRouter();
  const result = Answers[router.query.result];

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Results
          </Typography>
        </Grid>

        <Grid item xs={10}>
          <ResultsCard
            img={result.img}
            name={result.name}
            description={result.description}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
