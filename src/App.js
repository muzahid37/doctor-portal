import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import SingUp from './Pages/SingUp/SingUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Pages/Dashbord/Dashbord';
import MyApoinment from './Pages/Dashbord/MyApoinment';
import Review from './Pages/Dashbord/Review';
import AddDoctor from './Pages/Dashbord/AddDoctor';

function App() {
  return (
    <div classNameName="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='appoinment' element={<RequireAuth>
          <Appoinment/>
        </RequireAuth>}></Route>
      
        <Route path='dashbord' element={<RequireAuth>
          <Dashbord></Dashbord>
        </RequireAuth>}>
          <Route index element={<MyApoinment></MyApoinment>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='addDoctor' element={<AddDoctor></AddDoctor>}></Route>
        </Route>
        <Route path='singup' element={<SingUp/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
