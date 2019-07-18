import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbumsList } from "../actions/albums";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class AlbumsList extends Component {
  componentDidMount() {
    this.props.fetchAlbumsList();
  }
  renderAlbums = albums => {
    return albums.map(album => {
      return (
        <Link className="album" to={`/photos/${album.id}`} key={album.id}>
          {album.title}
        </Link>
      );
    });
  };
  render() {
    let data = this.props.albumsList;
    return (
      <>
        <div className="albums-list">{this.renderAlbums(data)}</div>
      </>
    );
  }
}
const mapStateToProps = ({ albumsList }) => {
  return { albumsList };
};
const mapDispatchToProps = {
  fetchAlbumsList
};
AlbumsList.propTypes = {
  albumsList: PropTypes.array.isRequired,
  fetchAlbumsList: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsList);
