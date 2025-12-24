import { useState } from 'react'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Route, Routes } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { NavBar } from './components/NavBar';
import { Products } from './pages/Products';
import { Product } from './pages/Product';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { ProtectedRoute } from './components/ProtectedRoute';
// import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  console.log("isLogin >> ", isLogin);
  return (
    <>
      {
        isLogin && <NavBar />
      }
      <Routes>
        <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/home" element={<Home />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/about"
          element={
            <ProtectedRoute isLogin={isLogin} username="Alice">
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
