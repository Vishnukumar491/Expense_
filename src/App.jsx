import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './Pages/Signin'
import Forget from './Pages/Forget'
import Home from './Pages/Home'
import Signup from './Pages/Signup'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forgetpassword' element={<Forget/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>

      
    </div>
  )
}

export default App