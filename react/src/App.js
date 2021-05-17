import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App(){
 
    const [livros, setlivros] = useState([
      
    ])
    const [novotitulo, setnovotitulo] = useState('');
    const [novoautor, setnovoautor] = useState('');
    const [novoedicao, setnovoedicao] = useState('');
    const [novoissn, setnovoissn] = useState('');
    const [novoano, setnovoano] = useState('');
    const [novoeditora, setnovoeditora] = useState('');
  

    function adiciona(event){

      event.preventDefault();
      let novoTipo = document.getElementById('tipo').value;
      let novoTitulo = novotitulo;
      let novoAutor = novoautor;
      let novoEdicao = novoedicao;
      let novoIssn = novoissn;
      let novoAno = novoano;
      let novoEditora = novoeditora;

      if(novoano > 2019 || novoano < 1900){
        alert('Ano de Publicação Invalido');
      } else {
        let c = { tipo: novoTipo, titulo: novoTitulo, autor: novoAutor, edicao: novoEdicao, issn: novoIssn, ano: novoAno, editora: novoEditora};
        
        setlivros([...livros, c]);

        setnovotitulo('');
        setnovoautor('');
        setnovoedicao('');
        setnovoissn('');
        setnovoano('');
        setnovoeditora('');
      }
    }
    
  

    function deleteRow(...obg){
      let livro = [...livros];
      livro.splice(livro, 1);
      setlivros(livro);
      console.log(livro)
      
    // alert(obg)
    }


function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
          //timer = duration;
          display.textContent = '00:00';
          document.getElementById('tipo').disabled = true;
          document.getElementById('titulo').disabled = true;
          document.getElementById('autor').disabled = true;
          document.getElementById('edicao').disabled = true;
          document.getElementById('issn').disabled = true;
          document.getElementById('ano').disabled = true;
          document.getElementById('editora').disabled = true;
          document.getElementById('btn').disabled = true; 
      }
  }, 1000);
}

window.onload = function () {
  var duration = 60 * 60; // Converter para segundos
  let display = document.querySelector('#timer'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer

};


 
    return(
      <div>
        <h1 className="text-center">Sistema para Solicitação de Livros - SiSoLi</h1>
        <div className=" text-center time" id="timer"></div>
        <div className = "container">
          <form onSubmit={adiciona} id="form" method="post">
            <div className="row g-3">
              <div  className="col-md-6">
                <label className="form-label">Tipo de vínculo</label>
                <select id="tipo" className="form-select" required>
                    <option value="Docente">Docente</option>
                    <option value="Discente">Discente</option>
                    <option value="Técnico">Técnico</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Titulo</label>
                <input id="titulo" type="text" value={novotitulo} onChange = { (event) => setnovotitulo(event.target.value)} className="form-control" required/>
              </div>
              <div className="col-md-6">
                    <label className="form-label">Autor</label>
                    <input id="autor" type="text" value={novoautor} onChange = { (event) => setnovoautor(event.target.value)} className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Edição</label>
                    <input id="edicao" type="number" value={novoedicao} onChange={ (event) => setnovoedicao(event.target.value)} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">ISSN</label>
                    <input id="issn" type="number" value={novoissn} onChange={ (event) => setnovoissn(event.target.value)} className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Ano Publicação</label>
                    <input id="ano" type="number" value={novoano} onChange={ (event) => setnovoano(event.target.value)} className="form-control"  />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Editora</label>
                    <input id="editora" type="text" value={novoeditora} onChange={ (event) => setnovoeditora(event.target.value)} className="form-control" />
                </div>
                <div className="col-md">
                    <button id="btn" className="btn btn-primary" >Solicitar Livro</button>
                </div>
            </div>

          </form >

          <h2 className="text-center tabela">Tabela de Soliciração</h2>
          <table id="table" className="table table-hover">
              <thead>
                <tr>
                  <th>Vinculo</th>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Edição</th>
                  <th>ISSN</th>
                  <th>Ano</th>
                  <th>Editora</th>
                  <th>Ação</th>

                </tr>
                
              </thead>
              <tbody id="corpo">

                {livros.map( item => {
                  return(
                    <tr key = {item.issn}>
                      <td>{item.tipo}</td>
                      <td>{item.titulo}</td>
                      <td>{item.autor}</td>
                      <td>{item.edicao}</td>
                      <td>{item.issn}</td>
                      <td>{item.ano}</td>
                      <td>{item.editora}</td>
                      <td> <button  className="btn btn-outline-danger btn-sm" onClick={()=> deleteRow(
                        item.tipo, item.titulo, item.autor, item.edicao, item.issn, item.ano, item.edicao
                        )} 
                        >Excluir</button></td>
                    </tr>
                  )
                })}

              </tbody>
          </table>
        </div>
      </div>
    );
  
}

export default App;
