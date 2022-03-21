import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './views/Home';

import Clientes from './views/clientes/Clientes.jsx';
import GerenciarCliente from "./views/clientes/Create"

import Destinos from './views/Destinos';
import GerenciarDestino from "./views/ManageDestino"

import Passagens from './views/Passagens';
import GerenciarPassagem from './views/ManagePassagem';

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
            <Route path="/gerenciar-cliente" element={<GerenciarCliente />} />
            <Route path="/gerenciar-cliente/:id" element={<GerenciarCliente />} />

            <Route path="/destinos" element={<Destinos />} />
            <Route path="/gerenciar-destino" element={<GerenciarDestino />} />
            <Route path="/gerenciar-destino/:id" element={<GerenciarDestino />} />


            <Route path="/passagens" element={<Passagens />} />
            <Route path="/gerenciar-passagem" element={<GerenciarPassagem />} />
            <Route path="/gerenciar-passagem/:id" element={<GerenciarPassagem />} />

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
