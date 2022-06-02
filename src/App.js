import './App.css';
import Navbar from '../src/Component/Navbar';
import Body from '../src/Component/Body';
import { useContext } from 'react';
import { ThemeContext } from '../src/Context/ThemeContext';

function App() {
  const { isLight }=useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar/>
      <br/>
      <br/>
      <Body/>
    </div>
  );
}

export default App;