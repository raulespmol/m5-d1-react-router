import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'

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

    if(mensaje.length < 10){
      setAlert({msg: 'Escribe un mensaje más descriptivo', color: 'danger'})
      return
    }

    return true
  }

  const sendMessage = () => {
    setAlert({msg: 'Colaborador ingresado correctamente', color: 'success'})
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
        placeholder="Describe tu pedido"
        type="text"
        name="mensaje"
        value={contact.mensaje}
        onChange={e => handleChange('mensaje', e.target.value)}
      />
      <Button variant="dark" type="submit" className="mb-3">
        Enviar
      </Button>
    </Form>
  )
}

export default Formulario