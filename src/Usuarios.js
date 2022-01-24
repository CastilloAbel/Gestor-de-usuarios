import './App.css';
const Usuarios = ({data}) =>{
    if (data === []) return null
    return (
        <div className="users">
            {data.map((el, i)=>
                <ul className="conteiner-user">
                    <p className="user" id={`user${i}`}>{`Nombre: ${el.name} ${el.lastName} Correo: ${el.email}`}</p>
                </ul>
            )}
        </div>
    )
}
export default Usuarios