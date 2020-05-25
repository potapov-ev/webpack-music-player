import React, { useContext } from "react";
import { AppContext } from "src/components";
import { findIndex } from "lodash";

const SongCardWrapper = ({ 
  children, 
  currentSongId,                  
  songs, 
}) => {
  const { setSongs } = useContext(AppContext);

  const playMusic = () => {
    const currentIndex = findIndex(songs, { id: currentSongId });
    let temp = songs.slice(currentIndex);
    
    if (currentIndex) {
      temp = temp.concat(songs.slice(0, currentIndex));
    }

    setSongs(temp);
  }
  
  return (
    <div onClick={playMusic}>
      {children}
    </div>
  )
};

export default SongCardWrapper;