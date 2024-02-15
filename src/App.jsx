import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Contacto from "./pages/Contacto"
import NotFound from "./pages/NotFound"

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
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
