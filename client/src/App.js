import Container from 'react-bootstrap/esm/Container';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Container className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<DashBoard/>}/>
    

   </Routes>
   </BrowserRouter>
   <ToastContainer/>
    </Container>
   
  );
}

export default App;
