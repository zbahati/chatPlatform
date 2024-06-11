
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ConversationPage } from './pages/conversationPage'
import { ConversationChannelPage } from './pages/conversationChannelPage'
import { DefaultConversationPage } from './pages/defaultConversationPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/conversation' element={<ConversationPage />}>
          <Route path=':id' element={<ConversationChannelPage />} />
          <Route index element={<DefaultConversationPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
