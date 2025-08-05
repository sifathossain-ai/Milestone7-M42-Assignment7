import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import Selected from './components/Selected/Selected'

function App() {
  const [players, setPlayers] = useState([])
  const [getCoin, setCoin] = useState(0);

  const handleChosePlayers = (player) => {
    setCoin(player.price);
    const newPlayers = [...players, player]
    if (players.length > 5) {
      alert("You can't add any one!")
    }
    else {
      setPlayers(newPlayers);
    }
  }
  // console.log(getCoin);

  const handleDelete = (id) => {
    const remaining = players.filter(idx => idx.id != id);
    setPlayers(remaining) 
    // console.log("Button was Clicked!", id);
  }

  return (
    <div className='max-w-7xl mx-auto py-7 px-2'>
      <Header getCoin={getCoin}></Header>
      <Players handleChosePlayers={handleChosePlayers}></Players>
      <Selected
        players={players}
        handleDelete={handleDelete}
      ></Selected>
    </div>
  )
}

export default App
