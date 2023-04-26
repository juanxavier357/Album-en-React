import { useState } from 'react'
import Album from './component/Album.jsx'

import './App.css'

const musics = [
  {
    artista: 'Rozes',
    categoria: 'solista',
    cancion: 'Under the Grave',
    anio: 2016
  },
  {
    artista: 'Freddie Mercury',
    categoria: 'grupal',
    cancion: "We Are the Champions",
    anio: 1977
  },
  {
    artista: 'Michael Jackson',
    categoria: 'solista',
    cancion: "Thriller",
    anio: 1982
  }]

function App() {

  const [count, setCount] = useState(0)

  const handleAdd = (evt) => {
    if (count < musics.length) {
      setCount(count + 1);
      if (count == musics.length - 1) {
        setCount(0);
      }
    }
  }

  const handleSubtract = (evt) => {
    if (count < musics.length) {
      setCount(count - 1);
      if (count == 0) {
        setCount(musics.length - 1 - count);
      }
    }
  }

  return (
    <>
      <div className='album__music'>
        <Album
          artist={musics[count].artista}
          category={musics[count].categoria}
          song={musics[count].cancion}
          year={musics[count].anio}
        />
        <div className='album__buttons'>
          <button className="preview" onClick={handleSubtract}>Preview</button>
          <button className="next" onClick={handleAdd}>Next</button>
        </div>
      </div>

    </>
  )
}

export default App
