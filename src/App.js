import './App.css';
import { Form } from './components/organisms';
function App() {
  return (
    <div className="App">
      <header>
        <img src="./assets/logo.png" alt="" />
      </header>
      <main>
        <div>
          <h1>Ejemplo de atomic design</h1>
          <Form />
        </div>
      </main>
    </div>
  );
}

export default App;
