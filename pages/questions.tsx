import Questions from "../data/questions.json";
import { useState } from "react";
import { Grid, Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Answers from "../data/answers.json";

export default function About() {
  const router = useRouter();
  const [question, setQuestion] = useState(Questions[0]);
  const [answers, setAnswers] = useState<Array<number>>([]);

  function getResults() {
    var selectedItem = "";
    var selectedValue = 0;
    for (const key in Answers) {
      var temp = 0;
      for (let index = 0; index < answers.length; index++) {
        Answers[key]["choices"][index] == answers[index] ? temp++ : temp;
      }
      if (temp > selectedValue) {
        selectedValue = temp;
        selectedItem = key;
      }
    }
    return selectedItem;
  }

  function nextQuestion() {
    const index = Questions.indexOf(question);
    if (index < Questions.length - 1) {
      setQuestion(Questions[index + 1]);
    } else {
      var result = getResults();
      router.push({
        pathname: "/results",
        query: { result: result },
      });
    }
  }

  function previousQuestion() {
    const index = Questions.indexOf(question);
    if (index > 0) {
      setQuestion(Questions[index - 1]);
    }
    // Remove last item added to answers
    setAnswers(answers.slice(0, -1));
  }

  function addAnswer(value: number) {
    var temp = answers;
    temp.push(value);
    setAnswers(temp);
  }

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
              {question.question}
            </Typography>
          </Grid>
          {question.answers.map((answer) => (
            <Grid item xs={6}>
              <Button
                sx={{ width: "100%" }}
                variant="outlined"
                color="primary"
                onClick={function () {
                  addAnswer(answer.value);
                  nextQuestion();
                }}
              >
                {answer.text}
              </Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={previousQuestion}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
