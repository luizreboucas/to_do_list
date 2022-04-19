

function lista(){
    

    var array = [];
    
    var input = document.getElementById('input');
    
    var escrito = input.value;
    
    document.getElementById('input').value = "";
    var escrever = document.getElementById('acoes');
    
    var acao = document.createElement("p");
    acao.innerHTML = `<input type="checkbox">${escrito}</input>`;
    document.getElementById('acoes').appendChild(acao);


}


