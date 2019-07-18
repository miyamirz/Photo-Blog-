import React, { Component } from "react";
import PropTypes from "prop-types";
export default class PostItem extends Component {
  render() {
    return (
      <div className="post" onClick={this.props.handleClick}>
        <div className="post-title">{this.props.title}</div>
        <div className="post-body">{this.props.body}</div>
      </div>
    );
  }
}

PostItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string
};
