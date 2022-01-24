import './App.css';
const Form = ({value, handleChange, submit, form})=>{
    return(
        <form onSubmit={submit} ref={form} className='form'>
            <p id='name'>Nombre</p>
            <input 
                placeholder='Nombre'
                type={"text"} 
                name="name"
                className="name" 
                value={value.name}
                onChange={handleChange}
                >
            </input>
            <p id='lastname'>Apellido</p>
            <input
                placeholder='Apellido' 
                type={"text"} 
                name="lastName" 
                className="lastname"
                value={value.lastName}
                onChange={handleChange}
                >
            </input>
            <p id='email'>Correo</p>
            <input 
                placeholder='Correo'
                type={"text"} 
                name="email" 
                className="email"
                value={value.email}
                onChange={handleChange}
                >
            </input>
            <input 
                className="button"
                type={"submit"} 
                value={"Enviar"}
                >
            </input>
        </form>
    )
}
export default Form