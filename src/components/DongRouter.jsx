import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import Content from './Content'
import DetailDong from './DetailDong'

const DongRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <Content />
      </Route>
      <Switch>
        <Route exact path="/:id" children={<Child />} />
      </Switch>
    </Router>
  )
}

const Child = () => {
  let { id } = useParams()
  return <DetailDong id={id} />
}

export default DongRouter
