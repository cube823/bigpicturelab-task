import { Grid } from '@material-ui/core/'
import DongRouter from './components/DongRouter'

const App = () => {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item container justify="center">
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <DongRouter />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
