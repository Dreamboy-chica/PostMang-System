import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './comp/Nav'
import Home from './comp/Home'
import All from './comp/All'
import Wp from './comp/Wp'
import Pm from './comp/Pm'
import Ds from './comp/Ds'
import Other from './comp/Other'
import Pdm from './comp/Pdm'
import Reg from './comp/Reg'
import Logout from './comp/Logout'
import Admin from './comp/Admin'
import Addpost from './comp/Addpost'
import Login from './comp/Login'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path="/" element={<All/>}/>
      <Route path='/wp' element={<Wp/>}/>
      <Route path="/pm" element={<Pm/>}/>
      <Route path="/ds" element={<Ds/>}/>
      <Route path='/other' element={<Other/>}/>
      <Route path="/pdm" element={<Pdm/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path='/addpost' element={<Addpost/>}/>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App