import { Grid } from '@material-ui/core';
import DongCard from './DongCard';
import dongList from './constant';

const Content = () => {

  const getDongCard = (dongObj) => {
    return(
      <Grid item xs={12} sm={4}>
        <DongCard {...dongObj} />
      </Grid>
    )
  }

  return (
    <Grid item container spacing={5}>
        {dongList.map(dongObj => getDongCard(dongObj))}
    </Grid>
  )
};

export default Content;