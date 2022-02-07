import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './views/Home';
import Clientes from './views/Clientes';
import Destinos from './views/Destinos';
import Passagens from './views/Passagens';
import Promocoes from './views/Promocoes';
import Contato from './views/Contato';
import Footer from './components/Footer';
import Privacy from './views/Privacy';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="container-fluid-global">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/passagens" element={<Passagens />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-de-privacidade" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
