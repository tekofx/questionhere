import * as React from 'react';
import Questions from "../data/questions.json";
import { useState } from 'react';
import { Grid, Box, Button, Container, Typography } from '@mui/material';

export default function About() {
  const [question, setQuestion] = useState(Questions[0]);


  function nextQuestion() {
    const index = Questions.indexOf(question);
    if (index < Questions.length - 1) {
      setQuestion(Questions[index + 1]);
    }
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       
       <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {question.question}
                </Typography>
            </Grid>
            {question.answers.map((answer) => (
            <Grid item xs={12}>
                <Button variant="contained" color="primary">
                    {answer.text}	
                </Button>
            </Grid>
            ))}
        </Grid>
        <Button variant="contained" color="primary" onClick={nextQuestion}>next</Button>
      </Box>
    </Container>
  );
}
