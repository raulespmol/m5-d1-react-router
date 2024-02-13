import { Container } from "react-bootstrap"
import './style.css'

const Footer = () => {
  return (
    <Container fluid className="bg-dark p-4 text-light">
      <Container>
        <p className="mb-0">HappyCake</p>
        <small>Raúl Espinoza M (2024)</small>
      </Container>
    </Container>
  )
}

export default Footer