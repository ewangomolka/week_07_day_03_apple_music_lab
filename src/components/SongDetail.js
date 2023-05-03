import React from 'react';

const SongDetail = ({song}) => {



    return ( 
        <div className='song-detail'>
            <a href={song['im:collection'].link.attributes.href}><img id="song-img" src={song['im:image'][0].label} /></a>
            A {song.category.attributes.term} song by {song['im:artist'].label} situated at number {song.category.attributes['im:id']} on the UK top 20 list.
            <audio controls>
                <source src = {song['link'][1]['attributes']['href']} type='audio/mp4'></source>
            </audio>
        </div>
     );
}
 
export default SongDetail;