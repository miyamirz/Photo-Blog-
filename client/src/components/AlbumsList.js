import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbumsList } from "../actions/albums";
class AlbumsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAlbumsList();
  }
  renderAlbums = albums => {
    return albums.map(album => {
      return (
        <div className="album" key={album.id}>
          <h1>{album.title}</h1>
        </div>
      );
    });
  };
  render() {
    let data = this.props.albumsList;
    return <div className="albums-list">{this.renderAlbums(data)}</div>;
  }
}
const mapStateToProps = ({ albumsList }) => {
  console.log("map:" + JSON.stringify(albumsList));
  return { albumsList };
};
const mapDispatchToProps = {
  fetchAlbumsList
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsList);
