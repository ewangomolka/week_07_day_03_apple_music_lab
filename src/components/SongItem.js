import React from 'react';

const SongItem = ({song, onSongClicked}) => {

    const handleClick = () => {
        console.log("clicked on " + song['im:name']);
        onSongClicked(song)
    }


    return ( 
        <li onClick={handleClick}>{song['im:name'].label}</li>
     );
}
 
export default SongItem;