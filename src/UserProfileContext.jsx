import React, { createContext, useState,useMemo } from "react";
import PropTypes from 'prop-types';

// Crear el contexto
export const UserProfileContext = createContext();

// Crear un proveedor de contexto
export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState('guest'); // Perfil por defecto

  // Memorizar el valor para evitar recrearlo en cada render
  const value = useMemo(() => ({ profile, setProfile }), [profile]);

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};

// Validación de props
UserProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};