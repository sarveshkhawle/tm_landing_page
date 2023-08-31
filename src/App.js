import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import NavBar from './components/AppBar';
import Form from './components/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/wfooter';

function App() {
  return (
    <div className="App">
   <NavBar/>
   <Form/>
   <ToastContainer/>
<Footer/>
    </div>
  );
}

export default App;
