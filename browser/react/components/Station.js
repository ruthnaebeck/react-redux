import React from 'react';
import Songs from './Songs';

export default function (props) {
  const genre = props.genreName;
  return (
    <div>
      <h3>{ genre } Station</h3>
      <Songs
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}
      />
    </div>
  );
}
