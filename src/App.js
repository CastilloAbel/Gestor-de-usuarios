import './App.css';
import Form from "./Form.js";
import Usuarios from "./Usuarios.js";
import { useState, useRef, useEffect} from "react"; 
var data = [];
function App() {
  const reset = {
    name: "",
    lastName: "",
    email: ""
  }
  const [value, setValue] = useState(reset)
  const form = useRef()
  const handleChange = ({target}) =>{
    setValue({...value, [target.name]: target.value})
  }
  const submit = (e)=>{
    e.preventDefault()
    data.push(value)
    setValue(reset)
  }
  useEffect(()=>{
   console.log(data)
  }, [value])
  console.log(value)
  return (
    <div className='conteiner'>
      <Form
        value={value}
        handleChange={handleChange}
        submit={submit}
        form={form}
      >
      </Form>
      <Usuarios
        data={data}
        >
      </Usuarios>
    </div>
  );
}

export default App;
