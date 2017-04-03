import React, {Component} from 'react';
import {connect} from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import {toggleSong} from '../action-creators/player';

// class StationContainer extends Component {
//     constructor(props){
//         super(props);

//     }

//     render() {
//     return <Station />;
//     }
// }

const mapStateToProps = (state, ownProps) => ({
  genreName: ownProps.params.genreName,
  songs: state.songs.filter(song => (song.genre === ownProps.params.genreName))
    .map(convertSong),
  currentSong: state.player.currentSong,
  isPlaying: state.player.isPlaying, 
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleOne: function(song, list) {
    dispatch(toggleSong(song, list))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Station);
