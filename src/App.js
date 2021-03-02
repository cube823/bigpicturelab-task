import {Grid} from '@material-ui/core/'
import Content from './components/Content'
import FirstBox from './components/FirstBox'
import Search from './components/Search'


function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item container justify="center">
        <Grid item xs={false} sm={2} />
        
        <Grid item xs={12} sm={8}>
          <FirstBox imgSrc="https://placeimg.com/220/220/any"/>
          <Search/>
          <Content/>
        </Grid>
        
        <Grid item xs={false} sm={2} />
        </Grid>
      
      </Grid>
    </div>
  );
}

export default App;
