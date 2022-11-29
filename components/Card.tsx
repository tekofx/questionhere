import {
  Grid,
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";

interface ResultsCardProps {
  name: string;
  img: string;
  description: string;
}

export default function ResultsCard(props: ResultsCardProps) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="100%"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
