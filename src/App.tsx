
import { Outlet, Route, Routes } from 'react-router-dom'
import { AuthenticationPage } from './pages/AuthenticationPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AuthenticationPage />} />
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
