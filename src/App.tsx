
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<div>Hello , Home</div>} />
      <Route path='conversation' element={<div>
        <div>conversation</div>
        <Outlet />
      </div>} />
      <Route path=':id' element={<div>Conversion Id page</div>} />
    </Routes>
    </>
  )
}

export default App
