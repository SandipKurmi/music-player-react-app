import React from "react";
// import { playAudio } from "../util";

const LibrarySong = ({ setSongs, song, setCurrentSong, songs, id, audioRef, isPlaying }) => {
  // console.log(currnetSong);
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id)
    await setCurrentSong(selectedSong[0]);
    //set  Active in library
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if the song is playing
    if (isPlaying) audioRef.current.play();

  }

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      <img alt={song.name} src={song.cover} />
      <div className="song-discription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
