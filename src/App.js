import './App.css';
import Home from './Component/Home';
import "./Style/style.css"
import "./Style/responsive.css"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster position='top-right'/>
      <Home/>
    </>
  );
}

export default App;
