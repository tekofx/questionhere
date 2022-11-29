import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Questions from "../data/questions.json";
import { useState } from 'react';
import Question from '../components/Question';

export default function About() {
  const [question, setQuestion] = useState(0);


  function nextQuestion() {
    setQuestion(question + 1);
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
       
        <Question question={Questions[question].question} answers={Questions[question].answers}/>
      </Box>
    </Container>
  );
}
