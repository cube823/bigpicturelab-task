import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DetailDong from './DetailDong'

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
  const { id, name, isUser } = props
  const classes = useStyles()

  return (
    <Router>
      <Card
        key={id}
        className={classes.root}
        variant="outlined"
        style={{
          position: 'relative',
          background: isUser === true && '#75E0D0',
          border: isUser === true && '#ffffff',
        }}
      >
        <CardContent>
          <Typography variant="h5" style={{ marginBottom: '3rem' }}>
            {name}
          </Typography>
          <Link to={id}>
            <CardActions>
              <Button variant="contained" className={classes.button}>
                들어가기
              </Button>
            </CardActions>
          </Link>
          <Switch>
            <Route exact path={id} component={DetailDong} />
          </Switch>
        </CardContent>
      </Card>
    </Router>
  )
}

export default DongCard
