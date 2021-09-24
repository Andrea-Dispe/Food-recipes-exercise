import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import {randomThumb} from '../helpers'
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const RecipesList = () => {
  const data = useContext(DataContext);
  function truncate(str) {
    return str.length > 300 ? str.substring(0, 100) + '...' : str;
  }

  return (
    <Grid container spacing={2}>
      {data.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Link to={{ pathname: `/recipe/${recipe.title}`, state: { recipe } }} style={{ textDecoration: 'none' }}>
            <Card elevation={3} sx={{ minHeight: '414px' }}>
              <CardHeader title={recipe.title} sx={{ textTransform: 'capitalize' }}></CardHeader>
              <CardMedia
                component="img"
                height="194"
                image={recipe.thumbnail ? recipe.thumbnail : randomThumb()}
                alt={recipe.title}
              ></CardMedia>
              <CardContent style={{ textOverflow: 'ellipsis' }}>Instructions: {truncate(recipe.instructions)} </CardContent>
              <CardContent>Time to prepare: {recipe.duration} mins </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipesList;
