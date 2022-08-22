let input = document.getElementById('tarefa')
let btnAdd = document.getElementById('adicionar')
let main = document.getElementById('areaLista')
let contador = 0
function adicionarTarefa(){
    let valorInput = input.value
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined) ){
        ++contador
        let novoItem = `<div id="${contador}"class="item">
        <div onclick="marcarTarefa(${contador})"class="item-icone">
            <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
        </div>
        <div >
            <p onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</p>
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i>   Deletar</button>
        </div>
    </div>`
    //adicionar novo item ao main
        main.innerHTML += novoItem
        //zerar o campo input
        input.value =""
        input.focus()
    }    
}
function marcarTarefa(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    if(classe == "item"){
        item.classList.add('clicado')

        var icone = document.getElementById('icone_'+id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

        item.parentNode.appendChild(item)
    }else{
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_'+id)
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')

    }
}

function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
    
}

