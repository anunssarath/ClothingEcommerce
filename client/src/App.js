import {Routes , Route} from 'react-router-dom'
import About from './pages/about';
import Register from './pages/Auth/register';
import Contact from './pages/contact';
import HomePage from './pages/homepage';
import Pagenotfound from './pages/pagenotfound';
import Policy from './pages/policy';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/login';
import Dashboard from './pages/user/dashboard';
import PrivateRoute from './components/Routes/private';
import ForgotPassword from './pages/Auth/forgotpassword';
import AdminRoute from './components/Routes/adminroute';
import AdminDashboard from './pages/admin/admindashboard';
import CreateCategory from './pages/admin/createcategory';
import CreateProduct from './pages/admin/createproduct';
import Users from './pages/admin/users';
import Orders from './pages/user/orders';
import Profile from './pages/user/profile';
import Products from './pages/admin/products';
import UpdateProduct from './pages/admin/updateproduct';
import Search from './pages/search';
import ProductDetails from './pages/productdetails';
import Categories from './pages/categories';
import CategoryProduct from './pages/categoryproduct';
import CartPage from './pages/cartpage';
import AdminOrders from './pages/admin/adminorders';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product/:slug' element={<ProductDetails/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/category/:slug' element={<CategoryProduct/>} />

        <Route path="/search" element={<Search/>} />
        <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route path='user' element={<Dashboard/>} />
        <Route path='user/orders' element={<Orders/>} />
        <Route path='user/profile' element={<Profile/>} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path='admin' element={<AdminDashboard/>} />
        <Route path='admin/create-category' element={<CreateCategory/>} />
        <Route path='admin/create-product' element={<CreateProduct/>} />
        <Route path='admin/product/:slug' element={<UpdateProduct/>} />
        <Route path='admin/products' element={<Products/>} />
        <Route path='admin/users' element={<Users/>} />
        <Route path='admin/orders' element={<AdminOrders/>} />

        </Route>
        
        <Route path='/register' element={<Register/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='*' element={<Pagenotfound/>} />
      </Routes>
    </>
  );
}

export default App;
