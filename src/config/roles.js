import ManagementUser from '../pages/Admin/Management/Member';
import ManagementPartner from '../pages/Admin/Management/Partner';
import ManagementAdmin from '../pages/Admin/Management/Admin';
import CheckAvailability from '../pages/User/CheckAvailability';
import Dashboard from '../pages/Partner/Dashboard';
import Information from '../pages/Partner/Information';
import Home from '../pages/User/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterPartner from '../pages/Register/Partner';
import Result from '../pages/User/BookingResult';
import Review from '../pages/Partner/Review';
import Booking from '../pages/Partner/Booking';
import PartnerList from '../pages/User/PartnerList';

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
  manageUser: {
    path: '/admin/users',
    page: ManagementUser,
  },
  managePartner: {
    path: '/admin/partners',
    page: ManagementPartner,
  },
  manageAdmin: {
    path: '/admin/admins',
    page: ManagementAdmin,
  },
  dashboard: {
    path: '/partner/dashboard',
    page: Dashboard,
  },
  information: {
    path: '/partner/details',
    page: Information,
  },
  booking: {
    path: '/partner/bookings',
    page: Booking,
  },
  review: {
    path: '/partner/reviews',
    page: Review,
  },
  home: {
    path: '/home',
    page: Home,
  },
  list: {
    path: '/list',
    page: PartnerList,
  },
  check: {
    path: '/check/:id',
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
    components.list,
    components.check,
    components.result,
  ],
  USER: [components.home, components.list, components.check, components.result],
  PARTNER: [components.dashboard, components.information, components.booking, components.review],
  ADMIN: [components.manageUser, components.managePartner, components.manageAdmin],
};

export default roles;
