import './App.css';
import DetailSong from './Components/DetailSong';
import ListSongs from './Components/ListSongs';
import NavBar from './Components/NavBar';
import DataSongs from './data/songs.json';
import { Songs } from './Context';
import Playing from './Components/Playing';
import { useState } from 'react'



function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song) setSong(DataSongs[0])
    else setSong(song)
  }
  return (
    <div className="App h-full">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <NavBar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar overflow-hidden'>
          {/* Col span 1 */}
          <DetailSong />
          {/* Col span 2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
