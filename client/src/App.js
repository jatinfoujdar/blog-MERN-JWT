import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import DataProvider from './constant/DataProvider';
import {BrowserRouter , Routes, Route,Navigate ,Outlet} from "react-router-dom"
import { useState } from 'react';
import CreatePost from './Components/Home/CreatePost';


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

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path='/create' element={<CreatePost/>}/>
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
    );
}

export default App;
