import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AlbumsList from "./AlbumsList";
import PostsList from "./PostsList";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("user :" + this.props.user);
  }
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/AlbumsList" component={AlbumsList} />
            <Route path="/PostsList" component={PostsList} />
          </Switch>
        </Router>
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps)(App);
