import { useState } from "react"
import Formulario from "../components/Formulario"
import Alerta from "../components/Alerta"
import { Container } from "react-bootstrap"

const Contacto = () => {
  const [alert, setAlert] = useState({msg: '', color: ''})

  return (
    <>
      <Container className="py-5">
        <h2 className="mb-0 text-danger">Contacto</h2>
        <p className="fs-4">¿Cómo podemos ayudarte?</p>
        <Formulario setAlert={setAlert}/>
        <Alerta
          msg={alert.msg}
          color={alert.color}
        />
      </Container>
    </>
  )
}

export default Contacto