import CheckAvailability from '../pages/CheckAvailability';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Result from '../pages/Result';

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
    path: '/home',
    page: Home,
  },
  check: {
    path: '/check',
    page: CheckAvailability,
  },
  result: {
    path: '/result',
    page: Result,
  },
};

const roles = {
  GUEST: [components.login, components.register],
  USER: [components.home, components.check, components.result],
};

export default roles;
