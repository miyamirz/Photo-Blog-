import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import AlbumsList from './AlbumsList';
import PostsList from './PostsList';
class Home extends Component {
    render() {
        console.log("rendering")
        return (
            <>
	            <Link to='/AlbumsList'>AlbumsList</Link>
				<Link to ='/PostsList'>PostsList</Link>
         </>
        );
    }
}

export default Home;    