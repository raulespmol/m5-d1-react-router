import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'

const Formulario = ({setAlert}) => {
  const [contact, setContact] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })

  const validateForm = () => {
    const {nombre, correo, mensaje} = contact

    if(!nombre || !correo || !mensaje){
      setAlert({msg: 'Completa todos los campos', color: 'danger'})
      return
    }

    const mailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!correo.match(mailRegEx)){
      setAlert({msg: 'Formato de correo incorrecto', color: 'danger'})
      return
    }

    if(mensaje.length < 20){
      setAlert({msg: 'Escribe un mensaje más descriptivo (min. 20 caracteres)', color: 'danger'})
      return
    }

    return true
  }

  const sendMessage = () => {
    setContact({
      nombre: '',
      correo: '',
      mensaje: ''
    })
    setAlert({msg: 'Ya recibimos tu pedido, te contactaremos!', color: 'success'})

    setTimeout(() => {
      setAlert({msg: '', color: ''})
    }, 5000);
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    if(validateForm()){
      sendMessage()
    }
  }

  const handleChange = (dato, valor) => {
    setContact(datosPrevios => ({
      ...datosPrevios,
      [dato]: valor
      })
    );
  }

  //RENDER
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control 
        placeholder="Nombre"
        type="text" 
        name="nombre"
        value={contact.nombre}
        autoComplete="false"
        onChange={e => handleChange('nombre', e.target.value)}
      />
      <Form.Control 
        placeholder="Correo (ejemplo@correo.cl)"
        type="text" 
        name="correo"
        value={contact.correo}
        onChange={e => handleChange('correo', e.target.value)}
      />
      <Form.Control 
        as="textarea"
        placeholder="Describe tu pedido"
        type="text"
        name="mensaje"
        value={contact.mensaje}
        onChange={e => handleChange('mensaje', e.target.value)}
      />
      <Button variant="primary" type="submit" className="mb-3 text-light">
        Enviar
      </Button>
    </Form>
  )
}

export default Formulario