import { useState } from 'react'
import './App.css'
import PageTitleUpdater from './components/PageTitleUpdater'
import NetworkStatus from './components/NetworkStatus'
import LoginForm from './components/LoginForm'
import UsersList from './components/UserList'
import Header from './components/Header'
import UserContext from './context/UserContext'
import SubmitButton from './components/SubmitButton'

function App() {
  const [user, setUser] = useState({ name: "Admin", role: "admin" });

  return (
    <>
      <PageTitleUpdater />
      {/* <NetworkStatus /> */}
      {/* <LoginForm /> */}
      {/* <UsersList /> */}
      {/* <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <LoginForm />
      </UserContext.Provider> */}
      {/* <SubmitButton /> */}
    </>
  )
}

export default App
