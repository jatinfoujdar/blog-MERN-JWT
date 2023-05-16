import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import DataProvider from './constant/DataProvider';
import {BrowserRouter , Routes, Route,Navigate ,Outlet} from "react-router-dom"
import { useState } from 'react';


const PrivateRoute = ({isAuthenticated, ...props}) => {
  return isAuthenticated ? 
  <>
  <Header/>
  <Outlet/>
  </>:
  <Navigate replace to= "/login"/>
}



function App() {
  
  const[isAuthenticated,setUserAuthenticated] = useState(false)
  return (
   
    <DataProvider>
      <BrowserRouter>
      
       <div style={{marginTop: 64}}>
          <Routes>
            <Route path='/login' element={<Login setUserAuthenticated={setUserAuthenticated} />}  />
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path='/' element={<Home/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
    );
}

export default App;
