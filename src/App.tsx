import { useState } from 'react';

import { Dashboard, Landing } from './pages';

import './App.css';

function App() {
  const [user] = useState(true)

  return (
    <div className="w-screen h-screen bg-white">
      {user ? <Landing /> : <Dashboard />}
    </div>
  );
}

export default App;
