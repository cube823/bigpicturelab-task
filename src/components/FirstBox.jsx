import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: 0,
    marginTop: '12%',
    marginBottom: 0,
    height: 220,
    borderWidth: 2,
    borderColor: 'lightgray',
  },
    cardForMedia: {
      width: 220, 
      borderWidth: 2, 
      borderColor: 'lightgray', 
      borderRadius: 0
  },
  media: {
    height: 220,
    // padding: '100%',
  },
}));

const FirstBox = props => {
  const classes = useStyles();
  const {imgSrc} = props

  return (
    <Card className={classes.root} variant="outlined">
      <Card className={classes.cardForMedia}>
        <CardMedia className={classes.media} image={imgSrc}></CardMedia>
      </Card>
      <CardContent>
      <Typography variant="h4">
          대전시 마을계획
        </Typography>
        <Typography variant="subtitled1" component="p" style={{'fontSize': '1.2rem'}}>
          &ensp;대전광역시에서 진행하는 마을계획입니다.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}

export default FirstBox;