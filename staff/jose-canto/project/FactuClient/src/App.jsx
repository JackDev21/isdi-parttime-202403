import { Routes, Route } from "react-router-dom"

import Login from "./components/view/Login"
import Register from "./components/view/Register"
import Home from "./components/view/Home"
import CustomerList from "./components/view/CustomerList"

import "./global.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </>
  )
}

export default App