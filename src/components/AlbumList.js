import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

const API_URL = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios.get(API_URL)
      .then(response => this.setState({
        albums: response.data
      }));
  }
  renderAlbums() {
    return this.state.albums.map((album, index) => 
      <AlbumDetail key={index} album={album} />
    );
  }
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
