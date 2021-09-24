import Slider from '../components/Slider';
import RecipesList from '../components/RecipesList';
import AddRecipe from '../components/AddRecipe';
import Grid from '@mui/material/Grid';


const MainPage = () => {
  return (
    <Grid container rowGap={3} justifyContent="center">
      <Slider />
      <AddRecipe />
      <RecipesList />
    </Grid>
  );
};

export default MainPage;
