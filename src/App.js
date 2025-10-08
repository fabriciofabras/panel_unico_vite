import React from "react";
import './App.css';
import { UserProfileProvider } from "./UserProfileContext";
import { PanelUnicoRoutes } from './routes/PanelUnicoRoutes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {

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
