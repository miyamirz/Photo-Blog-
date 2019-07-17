import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostItem from './PostItem';
import Comments from './Comments';
class PostsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCommentsVisible: {}
		};
	}
	componentDidMount() {
		this.props.fetchPosts();
	}
	handleClick = id => {
		let postId = id.toString();
		this.setState(state => {
			let currentVisibility = state.isCommentsVisible[postId] || false;
			return {
				isCommentsVisible: {
					...state.isCommentsVisible,
					[postId]: !currentVisibility
				}
			};
		});
	};
	renderPosts = posts => {
		return posts.map(post => {
			return (
				<div className="post-content" key={post.id}>
					<PostItem
						title={post.title}
						body={post.body}
						handleClick={() => this.handleClick(post.id)}
					/>
					{this.state.isCommentsVisible[post.id.toString()] && (
						<Comments postId={post.id} />
					)}
				</div>
			);
		});
	};
	render() {
		let { posts } = this.props;

		return <div className="posts-list">{this.renderPosts(posts)}</div>;
	}
}
const mapStateToProps = ({ posts }) => {
	return { posts };
};
const mapDispatchToProps = {
	fetchPosts
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostsList);
