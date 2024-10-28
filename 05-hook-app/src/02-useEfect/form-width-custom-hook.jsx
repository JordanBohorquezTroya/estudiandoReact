import { useForm } from "../hooks/use-form";

export const FormWidth = () => {
  
  const {  onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });


  return (
    <>
      <h1>Formulario con Custom Hooks</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button 
      className="btn btn-primary mt-2"
      onClick={onResetForm}
      
      >Borrar
      </button>
    </>
  );
};
