import React, { Component } from 'react';

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
