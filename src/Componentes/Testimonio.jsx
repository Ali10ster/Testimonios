import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from 'react';

function Testimonio({ name, country, profession,alt, description, imageUrl, imageSize }) {
  const [data, setData] = useState(false);
  const handleChange = () => {
    setData(data => !data);
  };

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={imageSize}
              image={imageUrl}
              alt={alt}
            />
            <CardContent>
              <Typography variant="h3" component="div">
                {name}
              </Typography>
              <Typography variant="h5" component="div">
                Vive en {country} y es {profession}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton onClick={handleChange}>
              {data ? <FavoriteBorderIcon />:<FavoriteIcon color='error' />}
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </>
  );

}

export default Testimonio