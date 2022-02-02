import { Route, Switch, Link } from 'wouter'

export default function App () {
  return (
    <>
      <Link to='/Elira'>To Elira</Link>
      <Link to='/Finana'>To Finana</Link>
      <Link to='/Pomu'>To Pomu</Link>
      <Switch>
        <Route path='/Elira'><div>Elira!</div></Route>
        <Route path='/Finana'><div>Finana!</div></Route>
        <Route path='/Pomu'><div>Pomu!</div></Route>
        <Route><div>Whomst?</div></Route>
      </Switch>
    </>
  )
}
