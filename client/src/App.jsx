
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
   <BrowserRouter>
   <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      
      <Route path='/register' element={ <Register/> }/>
      <Route path='/login' element={ <Login/> }/>
      
    </Routes>
   </BrowserRouter>
  )
}

export default App
