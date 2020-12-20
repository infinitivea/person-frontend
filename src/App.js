import './App.css';
import { useState } from 'react';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import LocalStorageService from './services/LocalStorageService';
import UserContext from './context/UserContext';

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());
  const [isAuthenticated, setIsAuthenticated] = useState(LocalStorageService.getToken());
  console.log(role);
  return (
    <>
      <UserContext.Provider
        value={{ role, setRole, isAuthenticated, setIsAuthenticated, id: LocalStorageService.getId() }}
      >
        <PrivateRoutes />
      </UserContext.Provider>
    </>
  );
}

export default App;
