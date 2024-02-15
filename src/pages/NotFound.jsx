import { Container, Row, Col } from "react-bootstrap"

const NotFound = () => {
  return (
    <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="mb-0 text-primary">Lo sentimos!</h2>
            <p className="fs-4">El sitio que buscas no existe o no se encuentra disponible :(</p>
            <img src="/cake-404.png" className="cupcake" alt="cupcake" />
          </Col>
        </Row>
      </Container>
  )
}

export default NotFound