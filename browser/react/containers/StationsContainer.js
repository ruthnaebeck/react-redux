import React, {Component} from 'react';
import Stations from '../components/Stations'
import {connect} from 'react-redux'

class StationsContainer extends Component {
    constructor(props){
        super(props)

    };
    
    render() {
    return <Stations />
    }
}

const convertSongsToStations = function (songsArray) {
    let stations = {};
    songsArray.forEach(function(song) {
        let genre = song.genre
        if (stations[genre]) {
            stations[genre].push(song);
        } else {
            stations[genre] = [song];
        }
    });
    return stations;
};

const mapStateToProps = (state) => ({stations: convertSongsToStations(state.songs)})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Stations)
// export default StationsContainer
