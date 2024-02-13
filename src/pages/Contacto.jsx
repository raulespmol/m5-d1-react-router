import { useState } from "react"
import Formulario from "../components/Formulario"
import Alerta from "../components/Alerta"

const Contacto = () => {
  const [alert, setAlert] = useState({msg: '', color: ''})

  return (
    <>
      <div>Contacto</div>
      <Formulario setAlert={setAlert}/>
      <Alerta
        msg={alert.msg}
        color={alert.color}
      />
    </>
  )
}

export default Contacto