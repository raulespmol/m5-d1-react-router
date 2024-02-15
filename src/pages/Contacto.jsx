import { useState } from "react"
import Formulario from "../components/Formulario"
import Alerta from "../components/Alerta"
import { Container, Row, Col } from "react-bootstrap"

const Contacto = () => {
  const [alert, setAlert] = useState({msg: '', color: ''})

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="mb-0 text-primary">Contacto</h2>
            <p className="fs-4">¿Cómo podemos ayudarte?</p>
            <Formulario setAlert={setAlert}/>
            <Alerta
              msg={alert.msg}
              color={alert.color}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contacto