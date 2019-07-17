import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import AlbumsList from './AlbumsList';
import PostsList from './PostsList';
import Gallery from './Gallery';
import { connect } from 'react-redux';
import '../index.css';
class App extends Component {
	componentDidMount() {
		//console.log('user :' + this.props.user);
	}
	render() {
		return (
			<>
				<Router>
					<Sidebar />
					<div className="container">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route
								path="/AlbumsList"
								component={AlbumsList}
							/>
							<Route
								path="/PostsList"
								component={PostsList}
							/>
							<Route
								path="/photos/:albumId"
								component={Gallery}
							/>
						</Switch>
					</div>
				</Router>
			</>
		);
	}
}
const mapStateToProps = state => {
	return state;
};
export default connect(mapStateToProps)(App);
