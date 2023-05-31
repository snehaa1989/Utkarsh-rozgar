import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Token from './Components/Token';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path = '/' index element = {<Home/>}/>
          <Route exact path = '/signup' element = {<Signup/>} />
          <Route exact path = '/login' element = {<Login/>} />
          <Route exact path = '/dashboard' element = {<Dashboard/>} />
          <Route exact path = '/forgotpassword' element = {<ForgotPassword/>} />
          <Route exact path = '/resetpassword' element = {<ResetPassword/>} />
          <Route exact path = '/token' element = {<Token/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;