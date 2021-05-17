let livros = [
   //{ tipo: 'olha', titulo: 'oba', autor: 'teste', edicao: '545', issn: '54545', ano: '2018', editora: '545'},
   // { tipo: 'olha', titulo: 'oba', autor: 'teste', edicao: '545', issn: '545', ano: '2018', editora: '545'}
  ]
function teste(){

        let corpo = document.getElementById('corpo');
        //criando elementos
        let tr = document.createElement('tr');
        let tdTipo = document.createElement('td');
        let tdTititulo = document.createElement('td');
        let tdAutor = document.createElement('td');
        let tdEdicao = document.createElement('td');
        let tdIssn = document.createElement('td');
        let tdAno = document.createElement('td');
        let tdEditora = document.createElement('td');
       // let botao = document.createElement('button');
       // botao.innerHTML = 'Excluir';
       // botao.classList.add('btn');
       // botao.classList.add('btn-outline-danger');
       // botao.classList.add('btn-sm');
        

       
        livros.map((item, indice) => {
            tdTipo.innerHTML = item.tipo;
            tdTititulo.innerHTML = item.titulo;
            tdAutor.innerHTML = item.autor;
            tdEdicao.innerHTML = item.edicao;
            tdIssn.innerHTML = item.issn;
            tdAno.innerHTML = item.ano;
            tdEditora.innerHTML = item.editora;
          //  botao.onclick = () =>  {deleteLinha(indice)}
            //botao.setAttribute("id", indice)

            // atribuindo os TDs ao TR
            tr.appendChild(tdTipo);
            tr.appendChild(tdTititulo);
            tr.appendChild(tdAutor);
            tr.appendChild(tdEdicao)
            tr.appendChild(tdIssn);
            tr.appendChild(tdAno);
            tr.appendChild(tdEditora);
           // tr.appendChild(botao);

            corpo.appendChild(tr);
         })

         console.log(livros)

}

function pegandoDados(){

   event.preventDefault();

   
    //armazendo valores em variaveis
    let tipo = document.getElementById('tipo').value;
    let titulo = document.getElementById('titulo').value; 
    let autor = document.getElementById('autor').value;
    let edicao = document.getElementById('edicao').value;
    let issn = document.getElementById('issn').value;
    let ano = document.getElementById('ano').value;
    let editora = document.getElementById('editora').value;


    if(ano> 2019 || ano < 1900){
        alert('Ano Publicacao Invalido')
    } else{

      //  let novoOBJ = { tipo: tipo, titulo: titulo, autor: autor, edicao: edicao, issn: issn, ano: ano, editora: editora}
         livros.push({ tipo: tipo, titulo: titulo, autor: autor, edicao: edicao, issn: issn, ano: ano, editora: editora});

    
        //limpando campos
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('edicao').value = '';
        document.getElementById('issn').value = '';
        document.getElementById('ano').value = '';
        document.getElementById('editora').value = '';  
         
       // console.log(livros)
        teste()
        
        
    }
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



//function deleteLinha(linha){
   //livros.splice(linha, 1);

    //teste()
    

//}


window.onload = function () {
    teste()
    var duration = 60 * 60; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};