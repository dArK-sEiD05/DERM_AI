import { useState } from 'react'

import '../assets/css/App.css'

import AuthPage from './AuthPage'
import ChatsPage from './ChatsPage'

function App1() {
  const [user, setUser] = useState(undefined)

  if (!user) {
    return <AuthPage onAuth={user => setUser(user)} />
  } else {
    return <ChatsPage user={user} />
  }
}

export default App1;
