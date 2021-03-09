import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './Content'
import DetailDong from './DetailDong'

const DongRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <Content />
      </Route>
      <Switch>
        <Route exact path="/:id" children={<DetailDong />} />
      </Switch>
    </Router>
  )
}

export default DongRouter
