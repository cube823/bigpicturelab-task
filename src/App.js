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
          <FirstBox imgSrc="https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_1280.jpg"/>
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
