import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="profile-section" />
        <div className="options">
          <div className="options-list">
            <Link to="/">Home</Link>
            <Link to="/AlbumsList">View My Albums</Link>
            <Link to="/PostsList">View My Posts</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
