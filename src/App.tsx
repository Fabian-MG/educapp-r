import { useState } from 'react';
import { AuthApp } from './AuthApp';
import { UnauthApp } from './UnauthApp';

import './App.css';

function App() {
  const [user] = useState(true)

  return (
    <div className="w-screen h-screen flex overflow-x-hidden">
      {user ? <AuthApp /> : <UnauthApp />}
    </div>
  )
}

export default App;
