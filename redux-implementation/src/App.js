import './App.css';
import Wallpapers from './Components/Wallpapers/Wallpapers';
import {Routes,Route} from 'react-router'
import SingleWallpaper from './Components/SingleWallpapers/SingleWallpaper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Wallpapers/>}/>
        <Route path='/:link' element={<SingleWallpaper/>}/>
      </Routes>
    </div>
  );
}

export default App;
