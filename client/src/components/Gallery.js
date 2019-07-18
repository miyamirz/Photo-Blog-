import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbumPhotos } from "../actions/photos";
import PropTypes from "prop-types";
class Gallery extends Component {
  componentDidMount() {
    let { albumId } = this.props.match.params;
    this.props.fetchAlbumPhotos(albumId);
  }
  renderPhotos() {
    let { photosData } = this.props;
    return photosData.map(photo => {
      let imgSrc = photo.thumbnailUrl;

      return (
        <div
          className="photo"
          key={photo.id}
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
      );
    });
  }
  render() {
    return <div className="photos-panel">{this.renderPhotos()}</div>;
  }
}
Gallery.propTypes = {
  photosData: PropTypes.array.isRequired,
  fetchAlbumPhotos: PropTypes.func.isRequired
};
const mapStateToProps = ({ photosData }) => {
  return { photosData };
};
const mapDispatchToProps = {
  fetchAlbumPhotos
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
