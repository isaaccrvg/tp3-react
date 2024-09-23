import './App.css'
import Perfil from './Components/Perfil'
function App() {

  const usuario = {
    nome: 'Marcos isaac',
    email:'marcos.carmo@al.infnet.edu.br',
    endereco:'Rua são josé, 90, Rio de Janeiro',
  };

  return (
    <div className='App'>
      <Perfil usuario={usuario}/>
    </div>
  )
}

export default App
