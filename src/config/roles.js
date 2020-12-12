import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const components = {
  login: {
    path: '/',
    page: Login,
  },
  register: {
    path: '/register',
    page: Register,
  },
  home: {
    path: '/',
    page: Home,
  },
};

const roles = {
  GUEST: [components.login, components.register],
  USER: [components.home],
};

export default roles;
