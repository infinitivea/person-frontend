import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </BrowserRouter>
  );
}

export default App;
