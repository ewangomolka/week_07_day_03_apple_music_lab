import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';



const MusicContainer = () => {

    const [songs, setSongs] = useState([])
    const [selectedSong, setSelectedSong] = useState(null)

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function () {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(results => results.json())
        .then(data => setSongs(data.feed.entry))
    }

    const onSongClicked = (song) => {
        setSelectedSong(song)
    }

    return ( 
        <div>
            {songs.length > 1 ?<SongList songs={songs} onSongClicked={onSongClicked}/> : null}
            {selectedSong ? <SongDetail song={selectedSong}/> : null}
        </div>
     );
}
 
export default MusicContainer;