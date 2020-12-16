import Admin from '../pages/Admin';
import CheckAvailability from '../pages/CheckAvailability';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterPartner from '../pages/Register/Partner';
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
  registerP: {
    path: '/p/register',
    page: RegisterPartner,
  },
  admin: {
    path: '/admin',
    page: Admin,
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
  GUEST: [
    components.login,
    components.register,
    components.registerP,
    components.home,
    components.check,
    components.result,
  ],
  USER: [components.home, components.check, components.result],
  PARTNER: [components.home, components.check, components.result],
  ADMIN: [components.admin],
};

export default roles;
