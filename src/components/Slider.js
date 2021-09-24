import { Carousel } from '@trendyol-js/react-carousel';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { randomThumb } from '../helpers';

import { useContext } from 'react';
import { DataContext } from '../DataContext';
  
const Slider = () => {
  const data = useContext(DataContext);
  return (
    <Carousel show={4} slide={1} transition={0.5} responsive useArrowKeys swiping infinite>
      {data.map((recipe, index) => (
        <Link to={{ pathname: `/recipe/${recipe.title}`, state: { recipe } }} style={{ textDecoration: 'none' }} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="194"
              image={recipe.thumbnail ? recipe.thumbnail : randomThumb()}
              alt={recipe.title}
            ></CardMedia>
          </Card>
        </Link>
      ))}
    </Carousel>
  );
};

export default Slider;
