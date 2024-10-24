// src/App.jsx
import './App.css';
import MacButton from './components/MacButton';
import MainDesc from './components/MainDesc';
import NavbarLogo from './components/NavbarLogo';
import OpenButton from './components/OpenButton';
import SandwichMenu from './components/SandwichMenu';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavbarLogo/>
        <SandwichMenu/>
      </div>
      <MainDesc/>
      <div className='content-area'>
        <div className='button-area'>
          <MacButton/>
          <OpenButton/>
        </div>
      </div>
    </div>
  );
}

export default App;