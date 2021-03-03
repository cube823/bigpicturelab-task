import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    borderColor: 'lightgray',
    borderWidth: 2,
    background: '#ffffff',
  },

  button: {
    position: 'absolute',
    right: '5%',
    background: '#5F00F0',
    color: '#ffffff',
    fontSize: '1.2rem',
    '&:hover': {
      backgroundColor: '#6F00FF',
      color: '#ffffff',
    },
  },
})

const DongCard = (props) => {
  const { id, title, enter } = props
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ position: 'relative', background: id < 5 && '#75E0D0', border: id < 5 && '#ffffff' }}
    >
      <CardContent>
        <Typography variant="h5" style={{ marginBottom: '3rem' }}>
          {title}
        </Typography>
        <CardActions>
          <Button variant="contained" className={classes.button}>
            {enter}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default DongCard
