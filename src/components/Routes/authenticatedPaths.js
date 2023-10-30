import Home from '../../layouts/Home/Home';
import Orders from '../../layouts/Orders/Orders';
import Products from '../../layouts/Products/Products';
import Support from '../../layouts/Support/Support';
import Login from '../Login/Login';
import ContactUs from '../ContactUs/ContactUs';
import Dashboard from '../../layouts/Dashboard/Dashboard';
import Register from 'components/Register/Register';
import CartDashboard from '../../layouts/CartDashboard/CartDashboard'

export const authenticatedPaths = [
  {
    name: <Home />,
    path: '/',
  },
  {
    name: <Orders />,
    path: '/orders',
  },
  {
    name: <Products />,
    path: '/products',
  },
  {
    name: <Support />,
    path: '/support',
  },
  {
    name: <Login />,
    path: '/login',
  },
  {
    name: <Register />,
    path: '/register',
  },
  {
    name: <ContactUs />,
    path: '/ContactUs',
  },
  {
    name: <Dashboard />,
    path: '/dashboard',
  },
  {
    name: <CartDashboard />,
    path: '/cartDashboard',
  },
];

