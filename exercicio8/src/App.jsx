import './App.css'
import yezzyImg from './assets/vasco.jpg'
import ImagemClicavel from './components/imagemClicavel.jsx'
const App = () => {

  return (
    <div className="App">
      <ImagemClicavel
        imagem={yezzyImg}
        descricao='Yezzy 350'
        link='https://elspotsm.com/adidas-yeezy-500-utility-black-regresan/'
      />
    </div>
  )
}

export default App;
