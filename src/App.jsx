import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProfileProvider } from "./UserProfileContext";
import { PanelUnicoRoutes } from './routes/PanelUnicoRoutes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('default');

  const [logueado, setLogueado] = useState(false);


  const handleLogueado = (conectado) => {
    console.log("conectado", conectado)
    setLogueado(conectado)
  }

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <main className="main-container text-gray-400 bg-gray-900 body-font">
      {/* <UserProfileProvider>     {logueado ? (<div><NavBar onOpcionSeleccionada={handleOpcionSeleccionada} handleLogueado={handleLogueado} />
        <div>
          {opcionSeleccionada === 'repositorio' && <Repositorio />}
          {opcionSeleccionada === 'heatmap' && <HeatMap />}
          {opcionSeleccionada === 'default' && <About />}
          {opcionSeleccionada === 'monitoreo' && <Monitoreo />}
          {opcionSeleccionada === 'inventarios' && <Inventarios />}
          {opcionSeleccionada === 'cmdb' && <CMDB />}
          {opcionSeleccionada === 'mesa' && <Mesa />}
        </div></div>) : (
        <Login handleLogueado={handleLogueado}></Login>
      )}

      </UserProfileProvider> */}
      <UserProfileProvider>
        <BrowserRouter>
          <PanelUnicoRoutes />
        </BrowserRouter>
      </UserProfileProvider>

      {/*       <Projects />
 */}      {/* <Skills/>
      <Contact/> */}
    </main>
  )
}

export default App
