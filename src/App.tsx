import { AuthApp } from './AuthApp';
import { UnauthApp } from './UnauthApp';

import './App.css';
import { useAuth } from './context/Auth';

function App() {
  const { user } = useAuth()

  return user ? <AuthApp /> : <UnauthApp />

}

export default App;
