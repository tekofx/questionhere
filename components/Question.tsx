import { Grid, Button,Typography } from "@mui/material"

interface QuestionProps {
    question: string;
    answers: { text: string; value: number; }[];
}

export default function Question(props: QuestionProps) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {props.question}
                </Typography>
            </Grid>
            {props.answers.map((answer) => (
            <Grid item xs={12}>
                <Button variant="contained" color="primary">
                    {answer.text}	
                </Button>
            </Grid>
            ))}
        </Grid>

    )
}