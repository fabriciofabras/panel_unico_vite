import { useState } from 'react'
import './App.css'
import { UserProfileProvider } from "./UserProfileContext";
import { PanelUnicoRoutes } from './routes/PanelUnicoRoutes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <main className="main-container text-gray-400 bg-gray-900 body-font">
      <UserProfileProvider>
        <BrowserRouter>
          <PanelUnicoRoutes />
        </BrowserRouter>
      </UserProfileProvider>
    </main>
  )
}

export default App
