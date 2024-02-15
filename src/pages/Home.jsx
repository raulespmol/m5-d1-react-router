import { Container } from "react-bootstrap"

const Home = () => {
  return (
    <Container className="py-5 h-100">
      <h1>Bienvenido a <b className="text-primary">HappyCake</b></h1>
      <p className="fs-3">El lugar de los pasteles felices!</p>
      <img src="/cup-cake.png" className="cupcake" alt="cupcake" />
    </Container>
  )
}

export default Home