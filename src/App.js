
import React, {useState, useEffect} from 'react';
import './App.css';
import './components/style.css'
import { Input1 } from './components/input1'
import { Table } from './components/table'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const memoriaDatos = () => {
    var info = localStorage.getItem("datos");
    if(info){
      return JSON.parse(info);
    }else{
      return [];
    }
  }

  const [datos, setDatos] = useState(memoriaDatos());


  const [valor, setValor] = useState("");
  const [selec, setSelec] = useState("");
  const [TRM, setTRM] = useState("");

  const btnSave = (e) =>{
    e.preventDefault();
    var pruebaObjeto = {valor, selec, TRM}
    setDatos([...datos, pruebaObjeto])
    limpiarFormulario();
  }

  const limpiarFormulario = () => {
    setValor("");
    setSelec("");
    setTRM("");
    document.getElementById("formulario").reset();
  }

  useEffect(() => {
    localStorage.setItem("datos", JSON.stringify(datos))
  }, [datos]);
  

  return (
    <div className="App">
      <header className="App-header">

        <form className="form-example" id="formulario" onSubmit={btnSave} type="POST" action="https://httpbin.org/post">
          <div className="title-form">
            <h4>Formulario prueba #2</h4>
          </div>
          <div className='form-group'>
            <Input1 
            name="valor"
            id="valor"
            placeholder="Valor"
            type="number"
            onChange={(e)=>setValor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select required name="selec" className="form-control" onChange={(e)=>setSelec(e.target.value)}>
              <option id="" hidden>Seleccione</option>
              <option required id="option1">Prueba 1</option>
              <option required id="option2">Prueba 2</option>
              <option required id="option2">Prueba 3</option>
            </select>
          </div>
          <Input1
          name="TRM"
          id="TRM"
          placeholder="TRM"
          type="number"
          onChange={(e)=>setTRM(e.target.value)}
          />
          <div className="btn-option d-flex justify-content-between">
            <div className="btn-send ml-3">
              <button className="guardar">Guardar</button>
            </div>
            <div className="btn-send mr-3">
              <input className="limpiar" type="reset" value="Limpiar" />
            </div>
          </div>

        </form>
        <div className="container">
          <Table />
        </div>
      </header>


     



    </div>
  );
}



export default App;
