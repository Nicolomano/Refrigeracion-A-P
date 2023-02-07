import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Refrigeracion A&P"/>
    </div>
  )
}

export default App
