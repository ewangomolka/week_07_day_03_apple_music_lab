import React from 'react';
import SongItem from './SongItem';

const SongList = ({songs, onSongClicked}) => {

    const songItems = songs.map((song, index) => {
        return <SongItem song={song} key={index} onSongClicked={onSongClicked}/>
    })

    return ( 
        <div className='song-item'>
            <ul>
            {songItems}
            </ul>
        </div>
     );
}
 
export default SongList;