
import './App.css';
import { useState } from 'react';

function App() {

  const [endereco,setEndereco] = useState ('');

  function manipularEndereco (evento) {

    const cep = evento.target.value

    setEndereco({
      cep
    })

    if(cep && cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
          setEndereco({
            cep:cep,
            rua: dados.logradouro,
            complemento: dados.complemento,
            bairro: dados.bairro,
            localidade: dados.localidade, 
            uf:dados.uf,
            ddd:dados.ddd
           })
        })
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <input
          className='input-cep'
          placeholder='Digite o cep'
          onChange={manipularEndereco} 
        />
        <ul>
          <li>CEP: {endereco.cep}</li>
          <li>Rua: {endereco.rua}</li>
          <li>Número: {endereco.complemento}</li>
          <li>Bairro: {endereco.bairro}</li>
          <li>Cidade: {endereco.localidade}</li>
          <li>UF: {endereco.uf}</li>
          <li>DDD: {endereco.ddd}</li>
        </ul>
      </header>
    </div>

  
  );

}

export default App;
