import React from 'react';
import { Button, Input } from '../../atoms';

const Form = () => {
  const [form, setForm] = React.useState({});

  // Change Values
  const onChangeValue = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  // Submit Form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        hasIcon
        icon="asdasd"
        onChangeValue={onChangeValue}
        placeholder="Ingresa tu nombre"
      />
      <Input name="email" required onChangeValue={onChangeValue} placeholder="Ingresa tu email" />
      <Input
        name="password"
        required
        onChangeValue={onChangeValue}
        placeholder="Ingresa tu contraseña"
      />
      <Input type="submit" />
    </form>
  );
};
export default Form;
