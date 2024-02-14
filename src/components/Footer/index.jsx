import { Container } from "react-bootstrap"
import './style.css'

const Footer = () => {
  return (
    <Container fluid className="bg-dark py-1 text-light">
      <Container>
        <p className="mb-0 fs-5">HappyCake</p>
        <small className="text-secondary">Raúl Espinoza M (2024)</small>
      </Container>
    </Container>
  )
}

export default Footer