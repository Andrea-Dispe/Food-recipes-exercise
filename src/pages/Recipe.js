import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const Recipe = () => {
  const location = useLocation();
  const recipe = location.state.recipe

  return (
    <Card>
      <CardHeader title={recipe.title}  sx={{textTransform: 'capitalize'}}></CardHeader>
      <CardMedia component="img" height="600" width="300" image={recipe.thumbnail} alt={recipe.title}></CardMedia>
      <CardContent>Instructions: {recipe.instructions}</CardContent>
      <CardContent>Time to prepare: {recipe.duration} mins </CardContent>
    </Card>
  );
};

export default Recipe;
