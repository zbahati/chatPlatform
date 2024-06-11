
import { Outlet, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/conversation' element={<div>
          <div>conversation</div>
          <Outlet />
        </div>} >
          <Route path=':id' element={<div>Conversion Id page</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
