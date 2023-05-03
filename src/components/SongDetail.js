import React from 'react';

const SongDetail = ({song}) => {



    return ( 
        <div className='song-detail'>
            A {song.category.attributes.term} song by {song['im:artist'].label} situated at number {song.category.attributes['im:id']} on the UK top 20 list.
        </div>
     );
}
 
export default SongDetail;