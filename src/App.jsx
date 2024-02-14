import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contacto from "./pages/Contacto"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contacto"
          element={<Contacto />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
